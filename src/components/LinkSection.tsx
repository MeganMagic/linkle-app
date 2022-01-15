import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LinkCell from './LinkCell';
import { LinkType } from '../types';

type LinkSectionProps = {
    name : string;
    sectionTitle : string;
    fetchUrl : string;
    token : string;
}

const LinkSection: React.FC<LinkSectionProps> = ({
    name, sectionTitle, fetchUrl, token
}) => {
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ links, setLinks ] = useState<LinkType[]>();

    useEffect(() => {
        axios.get(fetchUrl, {
            headers: {
                'content-type': 'application/json',
                'SSOQ-TOKEN' : token
            }
        })
        .then(res => res.data)
        .then(data => { 
            setLinks(data.data)
            setIsLoading(false)
        })
        .catch()
    }, [])

    const element = 
    <section className={`link-section link-section=${name}`}>
        <div className='title'>{sectionTitle}</div>
        {
            isLoading 
            ?
            <div>Loading...</div> 
            :
            <div className='grid-wrapper'>
                {
                    links?.map((data, index) => <LinkCell {...data} />)
                }
            </div>
        }
    </section>

    return element;
}

export default LinkSection;