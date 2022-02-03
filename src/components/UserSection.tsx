import React from 'react';
import { UserProfileType } from '../types';
import UserCell from './UserCell';

type UserSectionProps = {
    name : string;
    sectionTitle : string;
    users : UserProfileType[];
}

const UserSection : React.FC<UserSectionProps> = ({
    name, sectionTitle, users
}) => {
    const element = (
        <section className={`user-section user-section-${name}`}>
            <div className='title'>{sectionTitle}</div>

            <div className='grid-wrapper'>
            {
                users.map((user, index) => <UserCell key={index} {...user}/>)
            }
            </div>
        </section>
    );

    return element;
};

export default UserSection;