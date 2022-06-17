class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    // async 프로미스를 리턴함을 쉽게 알 수 있음
    async mostPopular() {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&region=KR&key=${this.key}`, this.getRequestOptions);
        const result_1 = await response.json();
        return result_1.items;
    }

    async search(query) {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&regionCode=KR&key=${this.key}`, this.getRequestOptions);
        const result_1 = await response.json();
        return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;