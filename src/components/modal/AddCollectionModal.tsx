import React, { useState } from 'react';
import CollectionModalView from './CollectionModalView';
import CollectionManager from '../../data/CollectionManager';
import { CollectionTypeAtModal } from '../../types';

const AddCollectionModal : React.FC = () => {

    const dataManager = CollectionManager.shared;

    const [state, setState] = useState<CollectionTypeAtModal>({
        name : '',
        desc : '',
        categories : [],
        isPublic : false,
        isNotGroup : false
    })

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        
        setState({
            ...state,
            [name] : value
        })
        
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const result = dataManager.create(state);
        result.then(result => {
            if(result === null) {
                console.log('post failed');
            }
            console.log('post success : ' + result);
        })
    }

    return <CollectionModalView formState={state} onChange={handleChange} onSubmit={handleSubmit}/>
}

export default AddCollectionModal