const axios = require('axios');
const baseUrl = 'https://graphql.contentful.com/content/v1/spaces/5eh5HnjQxy36cPK5TlyrZw/environments/master';
//hardcoded space + environment ID

export class AppService {


    public async getUsers(): Promise<any> {
        const response = await axios.get('/api/users');
        return response.data;
    }

    public async addUser(user: any) {
        const response = await axios.post(`/api/user`, {user});
        return response.data;
    }

    //paramaterise the url from config
    // add correct space + environment + get call for products from Contentful
    // create proper GraphQL API query for the API call
    // make Product component
    // make Product-overview page component that loops over products, show number of products

    public async getProducts(): Promise<any> {
        const response = await axios.post(baseUrl+'');
        return response.data;
    }

}