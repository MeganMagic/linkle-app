import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { CollectionTypeAbbr } from '../../types';
import { apiEndPoint, requestOption } from '../../variables';


const AddLinkModal : React.FC = () => {
    // ** FETCH DATA **
    // 1. my collection list
    const [ collectionList, setCollectionList ] = useState<CollectionTypeAbbr[]>();
    const requestCollectionList = axios.get(`${apiEndPoint}/w/my/collections?page=1`, requestOption);
    
    // ** FORM **
    const [ link, setLink ] = useState<string>('');
    const [ collectionIndex, setCollectionIndex ] = useState<number>(-1);

    const handleChangeLink = (e : React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setLink(e.target.value);
    }
    const handleChangeCollection = (e : React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const value = e.target.value;
        setCollectionIndex(parseInt(value));
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(link);
        console.log(collectionList && collectionList[collectionIndex].id)
    }

    // ** MODAL Control **
    const closeModal = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const modal = document.getElementById('add-link');
        if(modal) {
            modal.classList.remove('show');
        }
    }

    useEffect(()=> {
        requestCollectionList.then(res => res.data)
        .then(response => {
            setCollectionList(response.data.items)
        })
    }, [])

    // ** VIEW **
    const element = (
        <div className='Modal-page Modal-page-add-link' id='add-link'>
            <div className='Modal-page-intro'>
                <div className='modal-title'>링크 추가</div>
                <button className='cancel' onClick={closeModal}>
                    <i className='bx bx-x'></i>
                </button>
            </div>

            <form id='add-link' className='add-link' onSubmit={handleSubmit}>
                <input 
                    name='link' value={link} onChange={handleChangeLink}
                    className='enter-link' type='text' placeholder='링크를 입력하세요'
                />
                <select name='collectionId' className='collection-list' value={collectionIndex} onChange={handleChangeCollection}>
                    <option value={undefined} >--- 저장할 컬렉션을 선택하세요 ---</option> 
                    {
                        collectionList &&
                        collectionList.map((collection, index) => <option value={index} >{collection.name}</option>)
                    }
                </select>

                <div className='wrapper flex flex-jc-c'>
                    <button className='cancel' onClick={closeModal}>취소</button>
                    <button className='done' type='submit'>추가</button>
                </div>
            </form>
        </div>
    );

    return element;
}

export default AddLinkModal;