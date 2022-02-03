import React from 'react';

type ButtonShowMoreProps = {
    onClick : React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonShowMore : React.FC<ButtonShowMoreProps> = ({onClick}) => {
    const element = 
    <div className='width-100 flex flex-ai-c'>
        <button className='show-more' onClick={onClick}>
            <div className='title'>더보기</div>
        </button>
    </div>

    return element;
}

export default ButtonShowMore;