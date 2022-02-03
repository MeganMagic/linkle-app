import React, { useEffect, useState } from 'react';

type NavCellProps = {
    icon : string;
    title : string;
    buttonIcon? : string;
    modalId : string;
    modalElement : JSX.Element;
}

const NavCellModal : React.FC<NavCellProps> = ({
    icon, title, buttonIcon, modalId, modalElement
}) => {
    const [ modalToggle, setModalToggle ] = useState<boolean>(false);

    const handleToggle = (e : React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        const modal = document.getElementById(modalId);
        if(modal) {
            modal.classList.toggle('show');
        }
    }

    const element = 
    <>
    <div className='nav-cell nav-cell-modal' >

        <div className='event-handler-wrapper' onClick={handleToggle}>
            <i className={`cell-icon bx bx-${icon}`}></i>
            <div className='title' >{title}</div>
            {buttonIcon && <i className={`cell-icon-right bx bx-${buttonIcon}`} ></i>}
        </div>

        {modalElement}        
    </div>
    </>
    return element;
}


export default NavCellModal;