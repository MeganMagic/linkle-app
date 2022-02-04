import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MyProfileType, UserProfileType } from '../../types';
import { apiEndPoint } from '../../variables';

type UserProfileBoxProps = {
    data? : UserProfileType
}

const UserProfileView : React.FC<UserProfileBoxProps> = ({
    data
}) => {
    
    return data ? 
        <div className="user-profile-box">
            <div className='wrapper flex flex-ai-c'>
                <div className='thumbnail' style={{backgroundImage:`url(${data.thumbImage})`}}></div>
                <div className='name'>{data.name}</div>
            </div>
        </div>
        :
        <div>Data fetch failed</div>
    ;
}

export default UserProfileView;