import Api from "@/services/Api.js";

export default {
    register(credentials) {
        return Api().get('/', credentials);
    }    
}