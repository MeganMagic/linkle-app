import React, { useEffect } from 'react';
import { ssoqToken, apiEndPoint } from '../../variables';
import {  CollectionTypeAbbr, CollectionTypeAbbrExampleData } from '../../types';

import NavCell from './NavCell';
import NavCellFolder from './NavCellFolder';
import NavCellSearch from './NavCellSearch';
import UserProfileBox from './UserProfileBox';


const SideNav : React.FC = () => {

    const element = (
        <nav className="sidebar">

            { LogoSection }

            <section className='dashboard'>
                <NavCell icon='grid-alt' title='대시보드' />
                <NavCell icon='bell' title='알림' />
            </section>

            <div className='divider'></div>

            <section className='collections'>
                <NavCellSearch />

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

            <div className='divider'></div>

            <section className='functions'>
                <NavCell icon='link' title="링크 추가" buttonIcon='plus' />
                <NavCell icon='collection' title="컬렉션 추가" buttonIcon='plus' />
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
            <img className='logo-img' src={require('../../data/logo_img.png')}/>
            <img className='logo-text' src={require('../../data/logo_text.png')}/>
        </div>

        <button className='about'> about linkle </button>
    </section>
;