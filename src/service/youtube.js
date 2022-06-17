class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }

    // async 프로미스를 리턴함을 쉽게 알 수 있음
    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 10,
            }
        });
        return response.data.items;
    }

    async search(query) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                q: query,
                maxResults: 10,
            }
        })
        return response.data.items.map(item => ({...item, id: item.id.videoId}));
    }
}

export default Youtube;