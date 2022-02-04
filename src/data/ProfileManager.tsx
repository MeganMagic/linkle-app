import axios from "axios";
import { MyProfileType, UserProfileType } from "../types";
import { apiEndPoint, requestOption } from "../variables";

class ProfileManager {
    public static shared : ProfileManager = new ProfileManager();

    private constructor () {

    };

    public async getUser(userId : string) : Promise<UserProfileType> {
        const url = apiEndPoint + '/w/members/' + userId;
        return axios.get(url, requestOption)
            .then(response => response.data)
            .then(response => {
                if(response.status == '00')
                    return response.data;
                else throw new Error(response.message);
            })
            .catch(error => console.log(error))
    }

    public async getMy() : Promise<UserProfileType> {
        const url = apiEndPoint + '/w/my/profile';
        return axios.get(url, requestOption)
            .then(response => response.data)
            .then(response => {
                if(response.status == '00') {
                    return {
                        id : response.data.id,
                        name : response.data.alias,
                        thumbImage : response.data.thumbImage,
                        linkCount : response.data.linkCount
                    }
                } else throw new Error(response.message);
            })
    }

    public async getMyAll() : Promise<MyProfileType> {
        const url = apiEndPoint + '/w/my/profile';
        return axios.get(url, requestOption)
            .then(response => response.data)
            .then(response => {
                if(response.status =='00') return response.data;
                else throw new Error(response.message);
            })
            .catch(error => console.log(error))
    }
}

export default ProfileManager