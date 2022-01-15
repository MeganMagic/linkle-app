import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MyProfileType } from '../../types';
import { apiEndPoint } from '../../variables';

type UserProfileBoxProps = {
    token : string;
}

const UserProfileBox : React.FC<UserProfileBoxProps> = ({
    token
}) => {

    const [ profile, setProfile ] = useState<MyProfileType>()

    useEffect(() => {
        axios.get(apiEndPoint + '/w/my/profile', {
            headers : {
                'content-type': 'application/json',
                'SSOQ-TOKEN' : token
            }
        })
        .then(res => res.data)
        .then(data => {
            setProfile(data.data)
            console.log(data)
        })
    }, [])
    
    const element = 
    <div className="user-profile-box">
        <div className='wrapper flex flex-ai-c'>
            <div className='thumbnail' style={{backgroundImage:`url(${profile?.thumbImage})`}}></div>
            <div className='name'>{profile?.alias}</div>
        </div>
    </div>;
    return element;
}

export default UserProfileBox;