import styled from 'styled-components';
import "./SignIn.css"

export default function SignIn() {
    const LoginBtnClick = () => {
        console.log("클릭");
    }

    return (
        <>
            <div className="login-title">로그인</div>
            <div className="login-input-area">
                <LoginInput type="text" placeholder="이메일을 입력해 주세요." />
                <PassWordInput type="password" placeholder="비밀번호를 입력해 주세요." />
            </div>
            <LoginButton onClick={LoginBtnClick}>
                로그인 하기
            </LoginButton>
            <div className="login-sign-up-bar">
                <a href="#" className="login-sign-up">아직 계정 없으신가요?</a>
            </div>
        </>
    )
}

const LoginInput = styled.input`
    border: none;
    outline: none;
    height: 41px;
    font-size: 16px;
    width: 330px;
    border-bottom: 2.5px solid #4361EE;
    margin-bottom: 24px;
`

const PassWordInput = styled.input`
    border: none;
    outline: none;
    height: 41px;
    font-size: 16px;
    width: 330px;
    border-bottom: 2.5px solid #4361EE;
    margin-bottom: 24px;
`

const LoginButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 100px;
    float: right;
    border: none;
    border-radius: 8px;
    padding: 18px;
    outline: none;
    background-color: #4361EE;
    color: #fff;
    width: 100px;
    height: 30px;
    cursor: pointer;
`