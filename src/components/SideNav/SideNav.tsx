import React, { useEffect } from 'react';
import { ssoqToken, apiEndPoint } from '../../variables';

import NavCell from './NavCell';
import NavCellFolder from './NavCellFolder';
import NavCellSearch from './NavCellSearch';
import NavCellModal from './NavCellModal';
import UserProfileBox from './UserProfileBox';

import AddLinkModal from '../modal/AddLinkModal';
import AddCollectionModal from '../modal/AddCollectionModal';


const SideNav : React.FC = () => {

    const element = (
        <nav className="sidebar">

            { LogoSection }

            <section className='dashboard'>
                <NavCellSearch />
                <NavCell icon='grid-alt' title='대시보드' />
                <NavCell icon='bell' title='알림' />
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

            <section className='collections'>

                <NavCellFolder name='my' icon='book-alt' title='내 컬렉션'
                    url = { apiEndPoint + '/w/my/collections?page=1'} token={ssoqToken}
                />

                <NavCellFolder name='participant' icon='book-add' title='참가한 컬렉션'
                    url = { apiEndPoint + '/w/my/collections-participated?page=1'} token={ssoqToken}
                />

                <NavCellFolder name='subscribe' icon='book-bookmark' title='구독 컬렉션'
                    url = { apiEndPoint + '/w/my/collections?page=1'} token={ssoqToken}
                />
            </section>

            

            <UserProfileBox token={ssoqToken}/>
        </nav>
    );

    return element;
}

export default SideNav;


const LogoSection = 
    <section className='logo'>
        <div className='wrapper flex flex-ai-c'>
            <img className='logo-img' src={require('../../source-files/logo_img.png')}/>
            <img className='logo-text' src={require('../../source-files/logo_text.png')}/>
        </div>

        <button className='about'> about linkle </button>
    </section>
;