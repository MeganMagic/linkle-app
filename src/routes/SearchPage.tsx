import React from 'react';

type SearchPageProps = {
    type : 'ALL' | 'MY';
}

const SearchPage : React.FC<SearchPageProps> = ({ type }) => {
    const element = (
        <div className='Search-page'>

        </div>
    );

    return element;
}

export default SearchPage;