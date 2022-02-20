import React from 'react';
import { CollectionTypeAbbr } from '../types';

import 'boxicons';


const CollectionCell : React.FC<CollectionTypeAbbr> = ({
    id, color, name, introImage,
    isMine, isPublic, isGroup, isPinned,
    categoryNames, ownerNames, linkCount
}) => {
    const element = (
        <div className="collection-cell">
            <div className='cell-intro'>
                <div className='img' style={{backgroundImage:`url(${introImage})`}}></div>
                <div className='linkCount'>
                    <i className='bx bx-link'></i>
                    <div>{linkCount}</div>
                </div>
            </div>

            <div className='cell-desc'>
                <h4 className='title'>{name}</h4>
                <p className='md-light'>{ownerNames}</p>
            </div>
        </div>
    );
    return element;
}

export default CollectionCell;