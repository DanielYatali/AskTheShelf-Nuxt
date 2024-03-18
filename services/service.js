export class Service {
    constructor(endpoint, mainStore) {
        this.name = 'Service';
        this.endpoint = endpoint;
        this.mainStore = mainStore;
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
        let query_params = "?url=" + url
        return this.do_request("/scrape/amazon", "POST", {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }, JSON.stringify({url: url}));
    }

    async get_job(id) {
        return this.do_request("/jobs/" + id, "GET", {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }, null);
    }

    async poll_product(job_id) {
        let query_params = "?job_id=" + job_id
        return this.do_request("/products" + query_params, "GET", {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }, null);
    }

    async get_product(id) {
        try {
            const response = await this.do_request("/products/" + id, "GET", {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }, null);
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
        let response = await this.do_request("/products/" + id + "/chat", "POST", {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }, JSON.stringify({query: query}));
        if (response) {
            return response
        }
        return null
    }


    async search(query) {
        let response = await this.do_request("/embeddings/search", "POST", {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }, JSON.stringify({query: query}));
        if (response) {
            return response
        }
        return null
    }
}