import React, { useState, useEffect } from 'react';

import LinkCell from './LinkCell';
import { LinkType } from '../types';

type LinkSectionProps = {
    name : string;
    sectionTitle : string;
    links : LinkType[];
}

const LinkSection: React.FC<LinkSectionProps> = ({
    name, sectionTitle, links
}) => {
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const element = 
    <section className={`link-section link-section=${name}`}>
        <div className='title'>{sectionTitle}</div>
            <div className='grid-wrapper'>
                {
                    links?.map((data, index) => <LinkCell {...data} />)
                }
            </div>
    </section>

    return element;
}

export default LinkSection;