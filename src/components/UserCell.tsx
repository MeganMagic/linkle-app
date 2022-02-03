import { UserProfileType } from '../types';

const UserCell : React.FC<UserProfileType> = ({
    id, name, thumbImage, linkCount
}) => {
    const element = (
        <div className='user-cell'>
            <div className='thumb' style= {{backgroundImage: `url(${thumbImage})`}}></div>

            <div className='info'>
                <div className='name'>{name}</div>
                <div className='link-count'>링크 {linkCount}개</div>
            </div>

            <i className='bx bx-chevron-right'></i>
        </div>
    );

    return element;
}

export default UserCell;