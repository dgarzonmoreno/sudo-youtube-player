import axios from 'axios';

const KEY = 'AIzaSyAkZ64K44TkrpzdhnAKMfj13x7qgbD-1Kg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});