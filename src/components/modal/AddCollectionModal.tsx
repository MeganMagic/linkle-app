import React from 'react';
import CollectionModal from './CollectionModal';
import CollectionManager from '../../data/CollectionManager';


type AddCollectionModalProps = {

}

const AddCollectionModal : React.FC<AddCollectionModalProps> = ({}) => {

    const dataManager = CollectionManager.shared;

    const onSubmit = (e : React.FormEvent) => {
        e.preventDefault();

        // 1. input에 입력된 데이터 가져오기
        console.log(e);
        // 2. manager를 통해 저장
    }

    return <CollectionModal onSubmit={onSubmit}/>
}

export default AddCollectionModal