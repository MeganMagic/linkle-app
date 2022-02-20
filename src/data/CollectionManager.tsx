import axios from 'axios';
import { CollectionType, CollectionTypeAbbr, CollectionTypeAtModal } from '../types';
import { apiEndPoint, requestOption, ssoqToken } from '../variables';

class CollectionManager {
    static shared : CollectionManager = new CollectionManager();
    private token : string = ssoqToken;
    private requestOption : object = requestOption;

    private constructor() { }


    // 1. get a collection data
    // used : collection page, collection edit 
    public async getCollection (id : string) : Promise<CollectionType> {

        const url : string = apiEndPoint + '/w/collections/' + id;
        return await axios.get(url, this.requestOption)
            .then(response => response.data)
            .then(data => data.data)
            .catch((error) => {
                console.log(error);
            });
    }

    // 2. get collection list
    // another user's profile
    public getUserPublicCollections (id : string) : Promise<CollectionTypeAbbr[]>{
        const url : string = apiEndPoint + '/w/members/' + id + '/collections';
        return axios.get(url, requestOption)
            .then(response => response.data)
            .then(response => {
                if(response.status === '00') 
                    return response.data;
                else throw new Error(response.message)
            })
            .catch(error => console.log(error))
    }

    // my profile, side nav
    public async getMyCollections () : Promise<CollectionTypeAbbr[]> {
        const url : string = apiEndPoint + '/w/my/collections?page=1';
        return axios.get(url, requestOption)
            .then(response => response.data)
            .then(response => {
                if(response.status === '00') 
                    return response.data.items;
                else throw new Error(response.message)
            })
            .catch(error => console.log(error))
    }

    // side nav - my participated collections
    public async getCollectionsIParticipated () : Promise<CollectionTypeAbbr[]> {
        const url : string = apiEndPoint + '/w/my/collections-participated?page=1';
        return axios.get(url, requestOption)
            .then(response => response.data)
            .then(response => {
                if(response.status === '00')
                    return response.data.items;
                else throw new Error(response.message)
            })
            .catch(error => console.log(error))
    }

    // side nav - my subscribe collection
    public async getCollectionsISubscribed () : Promise<CollectionTypeAbbr[]> {
        const url : string = apiEndPoint + '/w/my/collections-subscribed'
        return axios.get(url, requestOption)
            .then(response => response.data)
            .then(response => {
                if(response.status === '00')
                    return response.data.items;
                else throw new Error(response.message)
            })
            .catch(error => console.log(error))
    }

    // 3. create new Collection
    public async create (data : CollectionTypeAtModal) : Promise<string | null> {
        const url : string = apiEndPoint + '/v1/folders';

        return axios.post(url, requestOption)
            .then(response => response.data)
            .then(response => {
                if(response.status === '00')
                    return response.message;
                else throw new Error(response.message)
            })
            .catch(error => {
                console.log(error.message);
                return null;
            })
    }
}

export default CollectionManager;