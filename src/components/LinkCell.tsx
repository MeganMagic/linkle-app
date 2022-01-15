import React from 'react';
import { LinkType } from '../types';


const LinkCell : React.FC<LinkType> = ({
    linkId, linkTitle, url, linkImage,
    ownerId, ownerName, likeCount,
    collectionId,
}) => {
    const element = (
        <div className='link-cell'>
            <div className='cell-intro'>
                <div className='img' style={{backgroundImage:`url(${linkImage})`}}></div>
                <div className='button-copy'>
                    <div className='button-background'></div>
                    <i className='button-icon bx bx-copy'></i>
                </div>
                <div className='owner'>{ownerName}</div>
            </div>

            <div className='cell-desc'>
                <div className='title'>{linkTitle}</div>
            </div>
        </div>
    )
    ;
    return element;
}

export default LinkCell;