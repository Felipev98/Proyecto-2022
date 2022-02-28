import axios from 'axios';
const apiClient = axios.create({
    baseURL :'http://127.0.0.1:8000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export default {
    getProposals(){
        return apiClient.get('api/v1/JobOffer/')
    },
    getBusinessProfiles(){
        return apiClient.get('api/v1/Profile/')
    },
    getDevProfiles(){
        return apiClient.get('api/v1/DevProfile/')
    }
}
