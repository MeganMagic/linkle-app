import React from 'react';

const LoginPage = () => {
    const element = (
        <div className='Login-page'>
            <div className='page-title'>
                <div>링클 linkle</div>
                <div className='desc em'>Social Interest Network</div>
                <div className='desc'>링클은 링크를 쉽게 저장하고 분류하고 공유하는 앱입니다.</div>
            </div>

            <div className='h-line'></div>

            <LoginButton 
                img={require('./Login/logo-kakao.png')} 
                title="카카오 로그인" 
                onClick={(e) => console.log(e)} 
            />

            <LoginButton 
                img={require('./Login/logo-google.png')} 
                title="구글 로그인" 
                onClick={(e) => console.log(e)} 
            />

            <LoginButton 
                img={require('./Login/logo-apple.png')} 
                title="애플 로그인" 
                onClick={(e) => console.log(e)} 
            />
        </div>
    );

    return element;
}
export default LoginPage;


type LoginButtonProps = {
    img : string;
    title : string;
    onClick : React.MouseEventHandler<HTMLButtonElement>;
}
const LoginButton : React.FC<LoginButtonProps> = ({ img, title, onClick }) => {
    return (
        <button className='login-button kakao' onClick={onClick}>
            <img className='img' src={img}/>
            <div className='text'>{title}</div>
            <div className='icon'></div>
        </button>
    );
}
