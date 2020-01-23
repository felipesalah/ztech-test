import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.code-challenge.ze.delivery/public/graphql',
});