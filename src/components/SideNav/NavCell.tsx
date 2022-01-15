import React, { useEffect } from 'react';

type NavCellProps = {
    icon : string;
    title : string;
    buttonIcon? : string;
}

const NavCell : React.FC<NavCellProps> = ({
    icon, title, buttonIcon
}) => {
    const element = 
    <>
    <div className='nav-cell'>
        <i className={`cell-icon bx bx-${icon}`}></i>
        <div className='title'>{title}</div>
        {
            buttonIcon &&
            <i className={`cell-icon-right bx bx-${buttonIcon}`} ></i>
        }
    </div>
    
    </>
    return element;
}


export default NavCell;