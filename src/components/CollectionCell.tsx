import React from 'react';

type CollectionType = {
    id : string;
    color : string;
    name: string;
    introImage : string;
    isMine : string; // Y||N
    isPublic : string;
    isGroup : string;
    isPinned : string;
    isParticipated : string;
    isFollowing : string;
    categoryNames : string | null;
    ownerNames : string;
    linkCount : number;
    description : string | null;
    owner : object; 
    followerCount : number;
    participantCount : number;
    participants : object[];
}

const CollectionCell : React.FC<CollectionType> = ({ 
    id, 
    color, name, introImage, description, categoryNames, ownerNames,
    isMine, isPublic, isGroup, isPinned, isParticipated, isFollowing,
    linkCount, followerCount, participantCount, 
    owner, participants
}) => {
    const element = (
        <div className="collection-cell">

        </div>
    );
    return element;
}

export default CollectionCell;