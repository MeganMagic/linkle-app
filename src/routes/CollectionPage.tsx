import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LinkSection from '../components/LinkSection';
import { CollectionType } from '../types';
import { apiEndPoint, ssoqToken } from '../variables';


const CollectionPage = () => {
    const param = useParams();
    const { collectionId } = param;

    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ data, setData ] = useState<CollectionType>();

    //console.log(collectionId)
    useEffect(() => {
        axios.get(apiEndPoint + '/w/collections/' + collectionId, {
            headers : {
                'content-type': 'application/json',
                'SSOQ-TOKEN' : ssoqToken
            }
        })
        .then(res => res.data)
        .then(data => {
            setData(data.data);
            setIsLoading(false)
        })
    }, [])

    const introElement = (data : CollectionType) => (
        <section className='collection-page-intro'>
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

    return (
        <div className='Collection-page'>
            { data && introElement(data) }
            <LinkSection name='link' fetchUrl={apiEndPoint + '/w/collections/' + collectionId + '/links'} token={ssoqToken} sectionTitle='링크'/>
        </div>
    );
}

export default CollectionPage;