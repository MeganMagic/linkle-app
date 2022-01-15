import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { CollectionTypeAbbr } from '../types';
import CollectionCell from './CollectionCell';

type CollectionSectionProps = {
    name : string;
    sectionTitle : string;
    fetchUrl : string;
    token : string;
}

const CollectionSection : React.FC<CollectionSectionProps> = ({
    name, sectionTitle, fetchUrl, token
}) => {

    const [ displayedCellNumber, setDisplayedCellNumber ] = useState<number>(3);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ collections, setCollections ] = useState<CollectionTypeAbbr[]>([]);

    useEffect(() => {
        axios.get(fetchUrl, {
            headers: {
                'content-type': 'application/json',
                'SSOQ-TOKEN' : token
            }
        })
        .then(res => res.data)
        .then(data => { 
            setCollections(data.data)
            setIsLoading(false)
        })
        .catch()
    }, [])

    // ** TODO **
    // Collections === [] 인 경우도 고려할 것
    const element = 
        <section className={`collection-section collection-section-${name}`}>
            <div className='title'>{sectionTitle}</div>
            {
                isLoading 
                ?
                <div>Loading...</div> 
                :
                <div className='grid-wrapper'>
                    {
                        collections.slice(0, displayedCellNumber)
                        .map((data, index) => <CollectionCell {...data} />)
                    }
                </div>
            }

            {
                collections.length > displayedCellNumber 
                ?
                <ButtonShowMore onClick={() => setDisplayedCellNumber(displayedCellNumber + 6)} />
                :
                null
            }
            
        </section>
    ;
    return element;
}


export default CollectionSection;



type ButtonShowMoreProps = {
    onClick : React.MouseEventHandler<HTMLButtonElement>;
}
const ButtonShowMore : React.FC<ButtonShowMoreProps> = ({onClick}) => {
    const element = 
    <div className='width-100 flex flex-ai-c'>
        <button className='show-more' onClick={onClick}>
            <div className='title'>더보기</div>
        </button>
    </div>

    return element;
}