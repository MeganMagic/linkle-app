export type CollectionType = {
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

export type CollectionTypeAbbr = {
    id : string;
    color : string;
    name : string;
    introImage : string;
    isMine : string;
    isPublic : string;
    isGroup : string;
    isPinned : string;
    categoryNames : string;
    ownerNames : string;
    linkCount : number
}

export type LinkType = {
    linkId: string;
    linkTitle: string;
    url : string;
    linkImage : string; 
    ownerId : string;
    ownerName : string,
    likeCount: number,
    collectionId : string
}

export type UserProfileType = {
    id: string;
    name: string;
    thumbImage: string;
    linkCount: number;
}

export type MyProfileType = {
    id: string;
    alias: string;
    thumbImage: string;
    email: string;
    birthYear: string | null;
    sex: string | null;
    linkCount: number;
}

// -------------
// ** Example data **

export const CollectionTypeAbbrExampleData : CollectionTypeAbbr = {
    id: "81cbfd0ccd9211ea82bdf5ff13716d91",
    color : "EF925D",
    name : "개발관련",
    introImage : "https://ssoq.io/collections/81cbfd0ccd9211ea82bdf5ff13716d91.jpg",
    isMine : 'Y',
    isPublic : 'N',
    isGroup : 'N',
    isPinned : 'N',
    categoryNames : "비즈니스,교육,IT",
    ownerNames : "스티이브",
    linkCount : 85
}

export const LinkTypeExampleData : LinkType = {
    linkId : "b9bf27f85b0111ecabba85814a634887",
    linkTitle : "Apache log4j Vulnerability CVE-2021-4428: Analysis and Mitigations",
    url : "https://unit42.paloaltonetworks.com/apache-log4j-vulnerability-cve-2021-44228/",
    linkImage : "https://ssoq.io/thumbs/b9bf27f85b0111ecabba85814a634887.png",
    ownerId : "5e3df9a2894511eab5ab13ad1412bb74",
    ownerName : "스티이브",
    likeCount : 0,
    collectionId : "81cbfd0ccd9211ea82bdf5ff13716d91"
}

export const UserTypeExampleData : UserProfileType = {
    id: "5e3df9a2894511eab5ab13ad1412bb74",
    name: "스티이브",
    thumbImage: "https://ssoq-profiles.s3.ap-northeast-2.amazonaws.com/5e3df9a2894511eab5ab13ad1412bb74.jpg",
    linkCount: 334
}