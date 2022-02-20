import React, { useEffect, useState } from 'react';
import CollectionSection from '../components/CollectionSection';
import LinkSection from '../components/LinkSection';

import { CollectionTypeAbbr, LinkType } from '../types';
import { ssoqToken, apiEndPoint } from '../variables';

import axios from 'axios';


type HomeFetchDataState = {
    recentCollections : CollectionTypeAbbr[],
    favoriteCollections : CollectionTypeAbbr[],
    recentLinks : LinkType[]
}
const HomePage = () => {
    const requestOption = {
        headers: {
            'content-type': 'application/json',
            'SSOQ-TOKEN' : ssoqToken
        }
    }
    const recentCollectionsRequest = axios.get(apiEndPoint + "/w/collections/recent", requestOption)
    const favoriteCollectionsRequest = axios.get(apiEndPoint + "/w/collections/favorite", requestOption)
    const recentLinksRequest = axios.get(apiEndPoint + "/w/links/recent", requestOption)
    
    const [ fetchData, setFetchData ] = useState<HomeFetchDataState>({
        recentCollections : [],
        favoriteCollections : [],
        recentLinks : [],
    })


    useEffect(() => {
        axios.all([recentCollectionsRequest, favoriteCollectionsRequest, recentLinksRequest])
        .then(axios.spread((...responses) => responses.map(r => r.data)))
        .then(response => {
            setFetchData({
                recentCollections : response[0].data,
                favoriteCollections : response[1].data,
                recentLinks : response[2].data,
            })
        })

    }, [])

    const element = <>
        <div className='Home-page'>
                
            <CollectionSection 
                name='recent-collection'
                sectionTitle="최근 추가한 컬렉션"
                collections={fetchData.recentCollections}
            />

            <CollectionSection 
                name='favorite'
                sectionTitle="즐겨찾기 컬렉션"
                collections={fetchData.favoriteCollections}
            />

            <LinkSection 
                name='recent-link'
                sectionTitle="최근 저장한 링크"
                links={fetchData.recentLinks}
            />

        </div>
    </>;

    return element;
}

export default HomePage;
