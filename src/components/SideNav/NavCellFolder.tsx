import React, { useEffect, useState } from 'react';
import {  CollectionTypeAbbr, CollectionTypeAbbrExampleData } from '../../types';
import axios from 'axios';

type NavCellFolderProps = {
    name : string;
    icon : string;
    title : string;
    //collectionsMenu : CollectionTypeAbbr[];
    url : string;
    token : string;
}


const NavCellFolder : React.FC<NavCellFolderProps> = ({
    name, icon, title, url, token
}) => {

    const [ collectionsMenu, setCollectionsMenu ] = useState<CollectionTypeAbbr[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    useEffect(() => {
        axios.get(url, {
            headers: {
                'content-type': 'application/json',
                'SSOQ-TOKEN' : token
            }
        })
        .then(res => res.data)
        .then(data => { 
            setCollectionsMenu(data.data.items)
            setIsLoading(false)
        })
        .catch()
    }, [])

    const openMenu = () => {
        const menuElement = document.getElementById(`cell-menu-${name}`)
        menuElement?.classList.toggle('open')
        const cellElement = document.getElementById(`cell-${name}`)
        cellElement?.classList.toggle('selected')
    }

    const element = 
    <>
        <div className='nav-cell' id={`cell-${name}`} onClick={openMenu}>
            <i className={`cell-icon bx bx-${icon}`}></i>
            <div className='title'>{title}</div>
            <i className='cell-icon-right bx bx-chevron-down' ></i>
        </div>
        <div className='nav-cell-menu' id={`cell-menu-${name}`}>
        {
            collectionsMenu.map((x, i) => 
                <div className='menu-cell'>
                    <div className='thumbnail' style={{backgroundImage:`url(${x.introImage})`}}></div>
                    <div className='title'>{x.name}</div>
                </div>
            )
        }
        </div>
    </>

    return element;
}

export default NavCellFolder;