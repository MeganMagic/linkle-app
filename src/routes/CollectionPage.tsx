import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LinkCell from '../components/LinkCell';

import { CollectionType, LinkType } from '../types';
import { apiEndPoint, requestOption } from '../variables';


const CollectionPage = () => {
    const param = useParams();
    const { collectionId } = param;

    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ introData, setIntroData ] = useState<CollectionType>();
    const [ linksData, setLinksData ] = useState<LinkType[]>();

    const introRequest = axios.get(apiEndPoint + '/w/collections/' + collectionId, requestOption);
    const linksRequest = axios.get(apiEndPoint + '/w/collections/' + collectionId + '/links?page=1', requestOption);

    useEffect(() => {
        axios.all([introRequest, linksRequest])
        .then(axios.spread((...responses) => responses.map(r => r.data)))
        .then(responses => {
            setIntroData(responses[0].data)
            setLinksData(responses[1].data.items)
            setIsLoading(false)
        })
        .catch(errors => {
            //error
        })
    }, [])

    const introElement = (data : CollectionType) => (
        <section className='Collection-page-intro'>
            <div className='flex'>
                <div className='thumbnail' style={{backgroundImage:`url(${data.introImage})`}} ></div>
                
                <div className='flex flex-col'>
                    <div className='title'>{data.name}</div>
                    <div className='owner'>{data.ownerNames}</div>

                    <div>
                        <button>참가</button>
                        <button>구독</button>
                    </div>
                </div>
            </div>
            
        </section>
    );

    const linksElement = (links : LinkType[]) => (
        // links.map((link, index) => <LinkCell key={index} {...link} />)

        <section className='link-section'>
            <div className='title'>링크 {links.length}개</div>
            <div className='grid-wrapper'>
                {
                    links.map((link, index) => <LinkCell {...link} /> )
                }
            </div>
        </section>
    )

    return (
        <div className='Collection-page'>
            { introData && introElement(introData) }
            { linksData && linksElement(linksData) }
        </div>
    );
}

export default CollectionPage;