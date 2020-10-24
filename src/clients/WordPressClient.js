class WordPressClient {
    url = 'http://www.svtemplemi.org/wp-json/wp/v2';

    async get(api) {
        try {
            const endpoint = `${this.url}/${api}`;
            return await fetch(endpoint).then((resp) => resp.json());
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async getPagesMetadata() {
        // TODO: HARSHA: filter the amount of info we get
        return this.get('pages');
    }

    async getPage(articleId) {
        return this.get(`pages/${articleId}`);
    }
}

const wordPressClient = new WordPressClient();

export default wordPressClient;
