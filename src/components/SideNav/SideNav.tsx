import React, { useEffect, useState } from 'react';
import { ssoqToken, apiEndPoint } from '../../variables';

import NavCell from './NavCell';
import NavCellFolder from './NavCellFolder';
import NavCellSearch from './NavCellSearch';
import NavCellModal from './NavCellModal';
import UserProfileBox from './UserProfileBox';

import AddLinkModal from '../modal/AddLinkModal';
import AddCollectionModal from '../modal/AddCollectionModal';
import { CollectionTypeAbbr, UserProfileType } from '../../types';
import ProfileManager from '../../data/ProfileManager';
import CollectionManager from '../../data/CollectionManager';
import NotificationModal from '../modal/NotificationModal';

type SideNavViewProps = {
    userData? : UserProfileType;
    myCollections? : CollectionTypeAbbr[];
    participateCollections? : CollectionTypeAbbr[];
    subscribeCollections? : CollectionTypeAbbr[];
}

const SideNavView : React.FC<SideNavViewProps> = ({
    userData,
    myCollections,
    participateCollections,
    subscribeCollections
}) => {

    const element = (
        <nav className="sidebar">

            <section className='logo mb-lg'>
                <div className='wrapper flex flex-ai-c'>
                    <img className='logo-img' src={require('../../source-files/logo_img.png')}/>
                    <img className='logo-text' src={require('../../source-files/logo_text.png')}/>
                </div>

                <button className='about'> 
                    <p className='sm'>about linkle</p> 
                </button>
            </section>

            <section className='dashboard'>
                <NavCellSearch />
                <NavCell icon='grid-alt' title='대시보드' />
                <NavCellModal icon='bell' title='알림' 
                    modalId='notification' modalElement={<NotificationModal />}
                />
            </section>

            <div className='divider'></div>

            <section className='functions'>
                <NavCellModal icon='link' title="링크 추가" buttonIcon='plus'
                    modalId='add-link' modalElement={<AddLinkModal />} 
                />
                <NavCellModal icon='collection' title="컬렉션 추가" buttonIcon='plus' 
                    modalId='add-collection' modalElement={<AddCollectionModal />}
                />
            </section>

            <div className='divider'></div>
            
            <div className='scroll-wrapper'>

                <section className='collections'>

                    <NavCellFolder name='my' icon='book-alt' title='내 컬렉션'
                        collections={myCollections}
                    />

                    <NavCellFolder name='participant' icon='book-add' title='참가한 컬렉션'
                        collections={participateCollections}
                    />

                    <NavCellFolder name='subscribe' icon='book-bookmark' title='구독 컬렉션'
                        collections={subscribeCollections}
                    />
                </section>

            </div>

            <UserProfileBox data ={userData} />
        </nav>
    );

    return element;
}

type SideNavProps = {

}

const SideNav : React.FC = () => {

    const [ userData, setUserData ] = useState<UserProfileType>();
    const [ myCollections, setMyCollections ] = useState<CollectionTypeAbbr[]>();
    const [ participateCollections, setParticipateCollections ] = useState<CollectionTypeAbbr[]>();
    const [ subscribeCollections, setSubscribeCollections ] = useState<CollectionTypeAbbr[]>();

    const profileManager = ProfileManager.shared;
    const collectionManager = CollectionManager.shared;

    useEffect(() => {
        profileManager.getMy()
            .then(res => setUserData(res));
        
        collectionManager.getMyCollections()
            .then(res => setMyCollections(res))
        
        collectionManager.getCollectionsIParticipated()
            .then(res => setParticipateCollections(res));

        collectionManager.getCollectionsISubscribed()
            .then(res => setSubscribeCollections(res));
    }, [])
    
    return ( userData && myCollections && participateCollections && subscribeCollections ) ?
        <SideNavView userData={userData} myCollections={myCollections} subscribeCollections={subscribeCollections} participateCollections={participateCollections} /> :
        <div>Loading</div>
    ;
}

export default SideNav;
