import axios from 'axios';

const KEY = 'AIzaSyBe4wQCUj1xpmVRIlu05H69E8_SXa67jpg';

export default axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/geocode/json',
    params: {
        key: `${KEY}`
    }
});