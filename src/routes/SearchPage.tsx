import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import CollectionSection from '../components/CollectionSection';
import LinkSection from '../components/LinkSection';
import UserSection from '../components/UserSection';
import axios from 'axios';

import { apiEndPoint, requestOption } from '../variables';
import { CollectionTypeAbbr, LinkType, UserProfileType, UserTypeExampleData } from '../types';


type SearchPageProps = {
    type : 'ALL' | 'MY';
}

type SearchAllFetchDataState = {
    collections : CollectionTypeAbbr[];
    links : LinkType[];
    members : UserProfileType[] | undefined;
}

// const tabData = ( keyword : string ) => [
//     {
//         title : '전체',
//         requests : [
//             `${apiEndPoint}/w/search/collections?keyword=${keyword}&page=1`,
//             `${apiEndPoint}/w/search/links?keyword=${keyword}&page=1`,
//             `${apiEndPoint}/w/search/members?keyword=${keyword}&page=1`
//         ],
//         sections : [
//             CollectionSection,
//             LinkSection,
//             UserSection
//         ]
//     },
//     {
//         title : 'My',
//         requests : [
//             `${apiEndPoint}/w/search/collections/my?keyword=${keyword}&page=1`,
//             `${apiEndPoint}/w/search/links/my?keyword=${keyword}&page=1`
//         ],
//         sections : [
//             CollectionSection,
//             LinkSection,
//         ]
//     }
// ]

const SearchPage : React.FC<SearchPageProps> = ({ type }) => {
    const param = useParams();
    const { keyword } = param;

    const requestAll = [
        axios.get(`${apiEndPoint}/w/search/collections?keyword=${keyword}&page=1`, requestOption),
        axios.get(`${apiEndPoint}/w/search/links?keyword=${keyword}&page=1`, requestOption),
        axios.get(`${apiEndPoint}/w/search/members?keyword=${keyword}&page=1`, requestOption)
    ]
    const requestMy = [
        axios.get(`${apiEndPoint}/w/search/collections/my?keyword=${keyword}&page=1`, requestOption),
        axios.get(`${apiEndPoint}/w/search/links/my?keyword=${keyword}&page=1`, requestOption)
    ]

    const [ searchFetchData, setSearchFetchData ] = useState<SearchAllFetchDataState>({
        collections : [],
        links : [],
        members : []
    })

    useEffect(() => {
        axios.all(type === 'ALL' ? requestAll : requestMy)
        .then(axios.spread((...responses) => responses.map(r => r.data)))
        .then(responses => {
            if(type === 'ALL') {
                setSearchFetchData({
                    collections : responses[0].data.items,
                    links : responses[1].data.items,
                    members : responses[2].data.items
                })
            }
            else {
                setSearchFetchData({
                    collections : responses[0].data.items,
                    links : responses[1].data.items,
                    members : undefined
                })
            }
        })
    }, [type])


    const tabElement = (type : string ) => (
        <div className='Search-page-tab'>
            <button className={`tab ${type === 'ALL' ? 'selected' : ''}`} id="all">전체</button>
            <button className={`tab ${type === 'MY' ? 'selected' : ''}`} id='my'>My</button>
        </div>
    )


    return (
        <div className='Search-page'>
            <SearchPageInput initialValue={keyword}/>
            <SearchPageTab selected={type} keyword={keyword}/>
            
            <div className='Search-page-result'>
                <CollectionSection 
                    name='result-collection'
                    sectionTitle={`컬렉션`}
                    collections={searchFetchData.collections}
                />
                <LinkSection 
                    name='result-collection'
                    sectionTitle='링크'
                    links={searchFetchData.links}
                />
                {
                    searchFetchData.members &&
                    <UserSection
                        name='result-user'
                        sectionTitle='사용자'
                        users={searchFetchData.members}
                    />
                }
            </div>
        </div>
    );
}

export default SearchPage;



type SearchPageInputProps = {
    initialValue : string | undefined;
}
const SearchPageInput : React.FC<SearchPageInputProps> = ({ 
    initialValue
}) => {
    const [ value, setValue ] = useState<string>(initialValue ? initialValue : '');
    const onKeywordChanged = (e : React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const element = (
        <div className='Search-page-input'>
            <button className='back'>
                <i className='bx bx-arrow-back'></i>
            </button>
            <input name='searchText' value={value} onChange={onKeywordChanged}/>
            <button className='delete-all'>
                <i className='bx bx-x'></i>
            </button>
        </div>
    )

    return element;
}

type SearchPageTabProps = {
    selected : 'ALL' | 'MY';
    keyword : string | undefined;
}
const SearchPageTab : React.FC<SearchPageTabProps> = ({ selected, keyword }) => {

    const navigate = useNavigate();

    const handleTabClicked = (type : 'ALL' | 'MY') => {
        switch(type) {
            case 'ALL' :
                navigate(`/searchresult/all/${keyword}`);
                break;
            case 'MY' : 
                navigate(`/searchresult/my/${keyword}`);
                break;
            default :
                break;
        };
    }
    const element = (
        <div className='Search-page-tab'>
            <button 
                id="all"
                className={`tab ${selected === 'ALL' ? 'selected' : ''}`} 
                onClick={() => handleTabClicked('ALL')}
            >전체</button>

            <button 
                className={`tab ${selected === 'MY' ? 'selected' : ''}`} 
                id='my'
                onClick={() => handleTabClicked('MY')}
            >My</button>
        </div>
    )

    return element;
}