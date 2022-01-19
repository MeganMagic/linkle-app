import React, { useEffect, useState } from 'react';
import CollectionSection from '../components/CollectionSection';
import LinkSection from '../components/LinkSection';

import { ssoqToken, apiEndPoint } from '../variables';


const HomePage = () => {
    
    const element = <>
        <div className='Home-page'>
                
            <CollectionSection 
                name='recent-collection'
                sectionTitle="최근 추가한 컬렉션"
                fetchUrl={apiEndPoint + "/w/collections/recent"}
                token={ssoqToken}
            />

            <CollectionSection 
                name='favorite'
                sectionTitle="즐겨찾기 컬렉션"
                fetchUrl={apiEndPoint + "/w/collections/favorite"}
                token={ssoqToken}
            />

            <LinkSection 
                name='recent-link'
                sectionTitle="최근 저장한 링크"
                fetchUrl={apiEndPoint + "/w/links/recent"}
                token={ssoqToken}
            />

        </div>
    </>;

    return element;
}

export default HomePage;
