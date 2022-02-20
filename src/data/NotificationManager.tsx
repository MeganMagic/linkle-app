import axios from 'axios';
import { NotificationType } from '../types';
import { apiEndPoint, requestOption, ssoqToken } from '../variables';

class NotificationManager {
    static shared : NotificationManager = new NotificationManager();
    private token : string = ssoqToken;
    private requestOption : object = requestOption;

    private constructor() {}

    // get notifications
    public async getNotifications () : Promise<NotificationType[]> {
        const url : string = apiEndPoint + '/w/my/notices';
        return axios.get(url, this.requestOption)
            .then(response => response.data)
            .then(response => {
                if(response.status === '00') 
                    return response.data.items;
                else throw new Error(response.message)
            })
            .catch(error => {
                console.log(error);
            })
    } 

    // get notification status
    public async isUnreadsExist () : Promise<boolean | null> {
        const url : string = apiEndPoint + '/w/my/notices';
        return axios.get(url, this.requestOption)
            .then(response => response.data)
            .then(response => {
                if(response.status === '00') 
                    return response.data.unreads === null ? true : false;
                else throw new Error(response.message);
            })
            .catch(error => {
                console.log(error);
                return null;
            }
        );
    }

    // post read
    public async readNotification (id : number) : Promise<string | null> {
        const url : string = apiEndPoint + '/v1/notices/' + id;

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

export default NotificationManager;