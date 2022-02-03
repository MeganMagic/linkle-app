import React, { useEffect, useState } from 'react';
import { CollectionType } from '../../types';
import CollectionManager from '../../data/CollectionManager';

const categories : string[] = []

type CollectionModalProps = {
    onSubmit : React.FormEventHandler;
}

const CollectionModal : React.FC<CollectionModalProps> = ({
    onSubmit
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

                <form onClick={onSubmit}>
                    <div className='collection wrapper'>
                        <div className='collection-thumbnail'>
                            <div className='image'></div>
                            <button className='add-photo'>사진 등록</button>
                        </div>

                        <div className='collection-information'>
                            
                            <div className='index wrapper'>
                                <div className='index-title'>컬렉션 이름</div>
                                <input className='index-input' type='text' name='name' placeholder='컬렉션 이름'/>
                            </div>

                            <div className='index wrapper'>
                                <div className='index-title'>컬렉션 설명</div>
                                <input className='index-input' type='text' name='description' placeholder='컬렉션 설명'/>
                            </div>

                            <div className='index wrapper'>
                                <div className='index-title'>카테고리 선택</div>
                                <input type='text' name='categories' placeholder='카테고리 선택'/>
                            </div>

                            <div className='index wrapper'>
                                <div className='flex flex-jc-sb'>
                                    <div className='index-title'>공개 컬렉션</div>
                                    <button className='index-checkbox selected' name='isPublic'></button>
                                </div>
                                <div className='desc'>공개 : 내 컬렉션을 다른 사람들에게 공개합니다.</div>
                            </div>

                            <div className='index wrapper'>
                                <div className='flex flex-jc-sb'>
                                    <div className='index-title'>개인 컬렉션</div>
                                    <button className='index-checkbox'name='isGroup'></button>
                                </div>
                                <div className='desc'>공개 : 내 컬렉션을 다른 사람들에게 공개합니다.</div>
                            </div>
                        </div>
                    </div>

                    <div className='wrapper controller'>
                        <button className='cancel'  onClick={closeModal}>취소</button>
                        <input className='done' type='submit' value='확인' />
                    </div>
                </form>
            </div>
        </div>
    );
    return element;
}

export default CollectionModal;



// ** Components **

type IndexTextProps = {
    title : string;
    name : string;
    value : string | undefined;
    onChange : React.ChangeEventHandler;
    placeholder? : string;
}
const IndexText : React.FC<IndexTextProps> = ({
    title, name, value, onChange, placeholder
}) => {
    const element = (
        <div className='index' id={`index-${name}`}>
            <div className='index-title'>{title}</div>
            <input 
                className='index-input' type='text' 
                name={name} value={value} onChange={onChange}
                placeholder={placeholder ? placeholder : ''}
            />
        </div>
    );
    return element;
}