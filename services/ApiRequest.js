import {v4 as uuidv4} from "uuid";

/**
 * Represents a class for making API requests.
 * @class
 */
export class ApiRequest {
    /**
     * Creates an instance of ApiRequest.
     * @param {string} audience - Audience for the access token.
     * @param {(options: Record<string, string>) => Promise<string>} getAccessTokenSilently - Function to get an access token silently.
     * @param {(options: Record<string, string>) => Promise<string | undefined>} getAccessTokenWithPopup - Function to get an access token with a popup.
     * @param mainStore
     */
    constructor(audience, getAccessTokenSilently, getAccessTokenWithPopup, mainStore) {
        /**
         * Audience for the access token.
         * @private
         * @type {string}
         */
        this.audience = audience;
        this.mainStore = mainStore;

        /**
         * Function to get an access token silently.
         * @private
         * @type {(options: Record<string, string>) => Promise<string>}
         */
        this.getAccessTokenSilently = getAccessTokenSilently;

        /**
         * Function to get an access token with a popup.
         * @private
         * @type {(options: Record<string, string>) => Promise<string | undefined>}
         */
        this.getAccessTokenWithPopup = getAccessTokenWithPopup;
    }

    /**
     * Handles the response from the API.
     * @private
     * @param {Response} response - The response object from the API.
     * @returns {Promise} - A promise that resolves to the response data.
     */
    async handleResponse(response) {
        try {
            const responseData = await response.json();
            if (!response.ok) {
                const errorData = responseData || {message: "Unknown error"};
                throw {status: response.status, data: errorData};
            }

            return responseData;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Makes a request to the API with the specified HTTP method.
     * @param {string} endpointUrl - Endpoint URL for the API request.
     * @param {string} method - HTTP method for the request (POST, PUT, DELETE, etc.).
     * @param {*} [body] - Request body data (optional).
     * @param {string} [contentType="application/json"] - Content type of the request (default is JSON).
     * @param {Object} [customHeaders] - Optional custom headers.
     * @returns {Promise} - A promise that resolves to the API response data.
     */

    async request(
        endpointUrl,
        method,
        contentType = "application/json",
        body,
        customHeaders,
    ) {
        const accessToken = await this.getAccessToken();
        const requestID = uuidv4();
        // this.mainStore.setRequestID(requestID);
        const defaultHeaders = {
            "Content-Type": contentType,
            Authorization: `Bearer ${accessToken}`,
            "X-Request-ID": requestID,
            Accept: contentType,
        };
        const headers = {
            ...defaultHeaders,
            ...customHeaders,
        };

        const requestConfig = {
            method,
            headers,
        };

        if (body) {
            requestConfig.body = JSON.stringify(body);
        }

        const response = await fetch(`${endpointUrl}`, requestConfig);
        return this.handleResponse(response);
    }

    /**
     * Gets the access token for API requests.
     * @public
     * @returns {Promise<string>} - A promise that resolves to the access token.
     */
    async getAccessToken() {
        const accessTokenOptions = {
            audience: this.audience,

        };
        try {
            return await this.getAccessTokenSilently(accessTokenOptions);
        } catch (err) {
            if (err.error === "consent_required") {
                try {
                    const accessToken =
                        await this.getAccessTokenWithPopup(accessTokenOptions);
                    return accessToken || "";
                } catch (popupError) {
                    console.error(popupError); // Log the error for debugging
                    throw popupError; // Rethrow the error to propagate it up
                }
            } else {
                console.error(err); // Log the error for debugging
                throw err; // Rethrow the error to propagate it up
            }
        }
    }
}
