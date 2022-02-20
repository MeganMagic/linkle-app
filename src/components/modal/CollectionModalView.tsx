import React, { useEffect, useState } from 'react';
import { CollectionTypeAtModal } from '../../types';


type CollectionModalProps = {
    formState : CollectionTypeAtModal;
    onChange : (event : React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit : (event : React.FormEvent<HTMLFormElement>) => void;
}

const CollectionModalView : React.FC<CollectionModalProps> = ({
    formState, onChange, onSubmit
}) => {

    const closeModal = (e : React.MouseEvent) => {
        e.preventDefault();
        const modal = document.getElementById('add-collection');
        if(modal) {
            modal.classList.remove('show');
        }
    }

    const element = (
        <div className='Modal-page Modal-page-add-collection' id='add-collection'>
            <div className='Modal-page-background' onClick={closeModal}></div>

            <div className='Modal-page-content'>
                <div className='Modal-page-intro'>
                    <div className='title'>컬렉션 추가</div>
                    <button className='cancel' onClick={closeModal}>
                        <i className='bx bx-x'></i>
                    </button>
                </div>

                <form onSubmit={onSubmit} className='collection-grid-wrapper'>
                    <div className='collection-thumbnail'>
                        <div className='image'></div>
                        <button className='add-photo'>사진 등록</button>
                    </div>

                    <div className='collection-information'>
                            
                        <p className='md-light mb-xs'>컬렉션 이름</p>
                        <input className='mb-md' type='text' name='name' placeholder='컬렉션 이름' 
                            onChange={onChange} value={formState.name}
                        />

                        <p className='md-light mb-xs'>컬렉션 설명</p>
                        <input className='mb-md' type='text' name='desc' placeholder='컬렉션 설명' 
                            onChange={onChange} value={formState.desc}
                        />

                        <p className='md-light mb-xs'>카테고리 선택</p>
                        <input className='mb-md' type='button' name='categories'
                            onChange={onChange} value={formState.categories.join(' ')}
                        />
                        <CategorySelector selectedCategories={formState.categories} addCategory={onChange}/>
                        

                        <div className='flex flex-jc-sb'>
                            <p className='md-light mb-xs'>공개 컬렉션</p>
                            <input 
                                name='isPublic'
                                type="checkbox" 
                                checked={formState.isPublic}
                                onChange={onChange} 
                            />
                        </div>
                        <div className='desc mb-md'>공개 : 내 컬렉션을 다른 사람들에게 공개합니다.</div>

                        <div className='flex flex-jc-sb'>
                            <p className='md-light mb-xs'>개인 컬렉션</p>
                            <input 
                                name='isNotGroup'
                                type="checkbox"
                                checked={formState.isNotGroup}  
                                onChange={onChange} 
                            />
                        </div>
                        <div className='desc mb-md'>공개 : 내 컬렉션을 다른 사람들에게 공개합니다.</div>
                    </div>

                    <div className='collection-controller'>
                        <button className='cancel'  onClick={closeModal}>취소</button>
                        <button className='done' type='submit'>확인</button>
                    </div>
                </form>
            </div>
        </div>
    );
    return element;
}

export default CollectionModalView;

type CategorySelectorProps = {
    selectedCategories : string[];
    addCategory : Function;
}
const CategorySelector : React.FC<CategorySelectorProps> = ({
    selectedCategories, addCategory
}) => {

    return (
    <div className='categories mb-md'>
        <div className='categories-box'>

            <p className='sm'>선택된 컬렉션이 없습니다. {selectedCategories.join(' ')}</p>

            <button className='unfold'>
                <i className='bx bxs-down-arrow'></i>
            </button>

            <button className='fold'>
                <i className='bx bxs-up-arrow'></i>
            </button>
        </div>

            <div className='categories-list'>
                <div className='categories-list-cell' >
                    <p className='sm-light'>IT</p>
                    <i className='bx bx-check'></i>
                </div>
                <div className='categories-list-cell checked'>
                    <p className='sm-light'>IT</p>
                    <i className='bx bx-check'></i>
                </div>
                <div className='categories-list-cell'>
                    <p className='sm-light'>IT</p>
                    <i className='bx bx-check'></i>
                </div>
                <div className='categories-list-cell'>
                    <p className='sm-light'>IT</p>
                    <i className='bx bx-check'></i>
                </div>
            </div>
        </div>
    )
}