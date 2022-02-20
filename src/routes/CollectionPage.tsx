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
            <div className='thumbnail' style={{backgroundImage:`url(${data.introImage})`}} ></div>
            
            <div className='flex flex-col'>
                <h2 className='title'>{data.name}</h2>
                <p className='md-light owner'>{data.ownerNames}</p>

                <div className='controller'>
                    <button className='styled pos'>참가</button>
                    <button className='styled pos'>구독</button>
                </div>
            </div>
        </section>
    );

    const linksElement = (links : LinkType[]) => (
        // links.map((link, index) => <LinkCell key={index} {...link} />)

        <section className='link-section'>
            <div className='flex mb-md'>
                <p className='lg'>링크</p>
                <p className='lg'>{`\b  ${links.length}개`}</p>
            </div>
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