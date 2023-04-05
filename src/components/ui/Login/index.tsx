import { ChangeEvent, useState } from 'react';
import { LoginType } from 'types/auth.type';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { LoginFeature } from 'features/auth/login.feature';
import Ment from 'components/common/Ment';
import { GoogleAuthLink } from 'features/auth/getGoogleAuthLink.feature';
import * as S from './style';

const Login = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    username: '',
    password: '',
  });

  const { login } = LoginFeature(loginData);
  const { google } = GoogleAuthLink();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <S.LoginLayout>
      <S.LoginWrap>
        <Ment posistion="flex-start" />
        <S.LoginBox>
          <S.Title>로그인</S.Title>
          <S.SubTitle>마음속에 담아있는 불만을 해소해 보세요</S.SubTitle>
          <S.InputWrap>
            <Input
              desc="아이디"
              placeholder="아이디를 입력해주세요"
              type="text"
              name="username"
              value={loginData.username}
              onChange={onChange}
            />
            <Input
              desc="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              name="password"
              value={loginData.password}
              onChange={onChange}
            />
          </S.InputWrap>
          <Button onClick={login} option="FILLED" width="50%" value="로그인" />
          <Button
            onClick={google}
            option="UNFILLED"
            width="50%"
            value="구글 로그인"
          />
        </S.LoginBox>
      </S.LoginWrap>
    </S.LoginLayout>
  );
};

export default Login;
