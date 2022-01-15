import React from 'react';

type ProfilePageProps = {
    type : "MY" | "USER";
}

const ProfilePage : React.FC<ProfilePageProps> = ({ type }) => {
    const element=(
        <div className='Profile-page'>

        </div>
    );

    return element;
}

export default ProfilePage;