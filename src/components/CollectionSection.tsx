import React, { useState, useEffect } from 'react';

import { CollectionTypeAbbr } from '../types';
import CollectionCell from './CollectionCell';
import ButtonShowMore from './ButtonShowMore';

type CollectionSectionProps = {
    name : string;
    sectionTitle : string;
    collections : CollectionTypeAbbr[];
}

const CollectionSection : React.FC<CollectionSectionProps> = ({
    name, sectionTitle, collections
}) => {

    const [ displayedCellNumber, setDisplayedCellNumber ] = useState<number>(3);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);


    // ** TODO **
    // Collections === [] 인 경우도 고려할 것
    const element = 
        <section className={`collection-section collection-section-${name}`}>
            <div className='title'>{sectionTitle}</div>
                <div className='grid-wrapper'>
                    {
                        collections.slice(0, displayedCellNumber)
                        .map((data, index) => <CollectionCell {...data} />)
                    }
                </div>

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