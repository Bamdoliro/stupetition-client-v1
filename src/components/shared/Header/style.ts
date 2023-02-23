import * as T from 'styles/text';
import { color } from 'styles/theme';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  width: 100vw;
  height: 72px;
  background-color: ${color.white};
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 86.1%;
  height: 100%;
  background-color: ${color.white};
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Logo = styled.img``;

export const LogoText = styled(T.H5)`
  color: ${color.black};
  cursor: pointer;
`;

export const Login = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid ${color.gray200};
`;

export const LoginText = styled(T.btn2)`
  color: ${color.gray900};
  cursor: pointer;
`;

export const Profile = styled.img`
  cursor: pointer;
`;

export const Logout = styled(T.H5)`
  color: ${color.black};
  cursor: pointer;
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 5.5px 0px;
`;
