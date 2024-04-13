export class Service {
    constructor(endpoint, mainStore, request) {
        this.name = 'Service';
        this.endpoint = endpoint;
        this.mainStore = mainStore;
        /**
         * API request instance for making authenticated API calls.
         * @type {ApiRequest}
         */
        this.api = request;
    }

    async get_users() {
        try {
            let response = await this.api.request(this.endpoint + "/api/v1/users", "GET");
            if (response.length > 0) {
                this.mainStore.users = response
            } else {
                this.mainStore.users = []
            }
        } catch (error) {
            throw error;
        }
    }

    async get_user_by_email(user) {
        try {
            let response = await this.api.request(this.endpoint + "/api/v1/users/by-email/" + user.email, "GET");
            if (response) {
                return response
            } else {
                return null
            }
        } catch (error) {
            throw error;
        }

    }

    async create_user(data) {
        try {
            let response = await this.api.request("/api/v1/users", "POST",
                "application/json", data);
            if (response) {
                return response
            }
            return null
        } catch (error) {
            throw error;
        }
    }

    async get_user(id) {
        try {
            let response = await this.api.request("/api/v1/users/" + id, "GET");
            if (response) {
                this.mainStore.user = response
            } else {
                this.mainStore.user = null
            }
        } catch (error) {
            throw error;
        }
    }

    async do_request(url, method, headers, body) {
        try {
            const response = await fetch(this.endpoint + url, {
                method: method,
                headers: headers,
                body: body
            });
            if (response.ok) {
                return response.json();
            }
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    }

    async get_products() {
        try {
            let response = await this.do_request("/products", "GET", {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }, null);
            if (response.length > 0) {
                this.mainStore.products = response
            } else {
                this.mainStore.products = []
            }
        } catch (error) {
            throw error;
        }
    }

    async start_job(url) {
        return this.api.request(this.endpoint + "/api/v1/jobs", "POST", "application/json", {url: url})

    }

    async get_job(id) {
        return this.api.request(this.endpoint + "/api/v1/jobs/" + id, "GET")
    }


    async get_product(id) {
        try {
            if (this.mainStore.product && this.mainStore.product.product_id === id) {
                return
            }
            let response = await this.api.request(this.endpoint + "/api/v1/products/" + id, "GET");
            if (response) {
                this.mainStore.product = response
            } else {
                this.mainStore.product = null
            }
        } catch (error) {
            throw error;
        }
    }

    async product_chat(id, query) {
        return this.api.request(this.endpoint + "/api/v1/products/" + id + "/chat", "POST", "application/json", {query: query})
    }


    async search(query) {
        return this.api.request(this.endpoint + "/api/v1/products/embedding/search", "POST", "application/json", {query: query})
    }

    parseMarkdown(markdown) {
        // Replace Markdown headers with HTML headers
        markdown = markdown.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        markdown = markdown.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        markdown = markdown.replace(/^# (.*$)/gim, '<h1>$1</h1>');

        // Replace Markdown bold with HTML bold
        markdown = markdown.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
        markdown = markdown.replace(/__(.*)__/gim, '<strong>$1</strong>');

        // Replace Markdown lists with HTML lists
        markdown = markdown.replace(/^\* (.*)/gim, '<ul>\n<li>$1</li>\n</ul>');
        markdown = markdown.replace(/^\- (.*)/gim, '<ul>\n<li>$1</li>\n</ul>');

        // Handle nested lists
        markdown = markdown.replace(/<\/ul>\n<ul>/gim, '');

        return markdown.trim();
    }
}