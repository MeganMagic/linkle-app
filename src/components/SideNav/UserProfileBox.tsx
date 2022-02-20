import React from 'react';
import { Link } from 'react-router-dom';
import { UserProfileType } from '../../types';

type UserProfileBoxProps = {
    data? : UserProfileType
}

const UserProfileView : React.FC<UserProfileBoxProps> = ({
    data
}) => {

    return data ? 
        <div className="user-profile">
            <div className='profile-box'>
                <div className='thumbnail' style={{backgroundImage:`url(${data.thumbImage})`}}></div>
                <div className='name flex flex-ai-c'>
                    <p className='md'>{data.name}</p>
                </div>

                <div className='flex flex-ai-c'>
                    <i className='more bx bx-dots-horizontal-rounded'></i>
                </div>
            </div>

            <div className='profile-menu' >
                <Link to='/profile/my'>
                    <div className='profile-menu-cell'>
                        <p className='md-light'>내 프로필</p>
                    </div>
                </Link>
                
                <div className='profile-menu-cell'>
                    <p className='md-light'>로그아웃</p>
                </div>
            </div>
        </div>
        :
        <div>Data fetch failed</div>
    ;
}

export default UserProfileView;