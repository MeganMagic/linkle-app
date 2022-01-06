import React from 'react';

type LinkCellType = {
    linkId: string;
    linkTitle: string;
    url : string;
    linkImage : string; 
    ownerId : string;
    ownerName : string,
    likeCount: number,
    collectionId : string
}

const LinkCell : React.FC<LinkCellType> = ({
    linkId, linkTitle, url, linkImage,
    ownerId, ownerName, likeCount,
    collectionId,
}) => {
    const element = (
        <div>
            link cell
        </div>
    )
    ;
    return element;
}

export default LinkCell;