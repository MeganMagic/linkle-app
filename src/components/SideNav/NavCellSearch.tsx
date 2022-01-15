import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const NavCellSearch = () => {
    const [ searchText, setSearchText ] = useState<string>('');

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // navigate
    }

    const element = 
        <div className='nav-cell nav-cell-search'>
            <i className='cell-icon bx bx-search'></i>
            <form onSubmit={onSubmit}>
                <input name='searchText' placeholder='검색'
                    value={searchText} 
                    onChange={onChange}
                />
            </form>
        </div>
    ;

    return element;
}

export default NavCellSearch