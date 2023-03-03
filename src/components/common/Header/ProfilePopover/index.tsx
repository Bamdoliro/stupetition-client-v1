import { LogoutFeature } from 'features/home/logout.feature';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import * as S from './style';

export interface ProfilePopoverPropsType {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}

const ProfilePopover = ({ isOpen, close }: ProfilePopoverPropsType) => {
  const navigate = useNavigate();
  const { logout } = LogoutFeature();
  return (
    <S.ProfilePopover display={isOpen ? 'flex' : 'none'}>
      <S.Button onClick={() => navigate('/update/password')}>
        <S.ButtonText>비밀번호 변경</S.ButtonText>
      </S.Button>
      <S.Button onClick={() => navigate('/petition/my')}>
        <S.ButtonText>내가 쓴 청원</S.ButtonText>
      </S.Button>
      <S.Line />
      <S.Button onClick={() => navigate('/user/delete')}>
        <S.ButtonText>계정 삭제</S.ButtonText>
      </S.Button>
      <S.Button onClick={logout}>
        <S.ButtonText>로그아웃</S.ButtonText>
      </S.Button>
    </S.ProfilePopover>
  );
};

export default ProfilePopover;
