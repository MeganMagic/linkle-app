import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProfileManager from '../data/ProfileManager';
import CollectionSection from '../components/CollectionSection';
import { CollectionType, CollectionTypeAbbr, MyProfileType, UserProfileType, UserTypeExampleData } from '../types';
import CollectionManager from '../data/CollectionManager';

type ProfilePageViewProps = {
    data : UserProfileType;
    collections : CollectionTypeAbbr[];
    isController? : Boolean;
}
const ProfilePageView : React.FC<ProfilePageViewProps> = ({
    data, isController = false, collections
}) => {

    return (
        <div className='Profile-page'>
            <div className='Profile-page-intro'>
                <div className='thumbnail' style={{backgroundImage : `url()${data.thumbImage}`}}></div>

                <div className='flex flex-col'>
                    <div className='name'>{data.name}</div>
                    <div className='link-count'>{`저장한 링크 \b ${data.linkCount}개`}</div>
                </div>

                {
                    isController &&
                    <div className='controller'>
                        <button className='edit'>
                            <div className="text">프로필 수정</div>
                            <div className='icon'><i className='bx bxs-edit'></i></div>    
                        </button>
                    </div>
                }
                
            </div>

            <CollectionSection name='my' sectionTitle='컬렉션' collections={collections} />
        </div>
    );
}



type ProfilePageProps = {
    type : 'MY' | 'USER';
}

const ProfilePage : React.FC<ProfilePageProps> = ({ type }) => {
    
    const param = useParams();
    const { userId } = param;
    const [ data, setData ] = useState<UserProfileType>();
    const [ collectionsData, setCollectionsData ] = useState<CollectionTypeAbbr[]>()

    const profileManager = ProfileManager.shared;
    const collectionManager = CollectionManager.shared;
    
    useEffect(() => {
        // component did mount
        // you make the request after every render
        if(type =='MY') {
            profileManager
                .getMy()
                .then(res => setData(res))
            collectionManager
                .getMyCollections()
                .then(res => setCollectionsData(res))
        } else {
            if( !userId ) return;
            profileManager
                .getUser(userId)
                .then(res => setData(res));
            collectionManager
                .getUserPublicCollections(userId)
                .then(res => setCollectionsData(res));
        }
    }, [])

    return data && collectionsData ?
        <ProfilePageView data ={ data } collections = {collectionsData} isController={type ==='MY' ? true : false}/> :
        <div>Loading...</div> 
}

export default ProfilePage;