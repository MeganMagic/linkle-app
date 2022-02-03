import axios from 'axios';
import { CollectionType } from '../types';
import { apiEndPoint, requestOption, ssoqToken } from '../variables';

class CollectionManager {
    static shared : CollectionManager = new CollectionManager();
    private token : string = ssoqToken;
    private requestOption : object = requestOption;

    private constructor() { }

    // public static instantiate () {
    //     return this.instance|| (this.instance = new CollectionManager())
    // }

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
    // used : main, user profile, side nav
    public getCollections (type : string) {

    }
}

export default CollectionManager;