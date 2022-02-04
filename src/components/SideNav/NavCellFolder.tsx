import React, { useEffect, useState } from 'react';
import {  CollectionTypeAbbr, CollectionTypeAbbrExampleData } from '../../types';
import axios from 'axios';

type NavCellFolderProps = {
    name : string;
    icon : string;
    title : string;
    collections? : CollectionTypeAbbr[];
}


const NavCellFolder : React.FC<NavCellFolderProps> = ({
    name, icon, title, collections
}) => {

    // const [ isLoading, setIsLoading ] = useState<boolean>(true);

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
            collections &&
            collections.map((x, i) => 
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