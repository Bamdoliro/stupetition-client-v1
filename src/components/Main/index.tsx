import Banner from 'assets/banner.svg';
import * as S from './style';

const Main = () => {
  return (
    <S.Container>
      <S.Banner>
        <S.BannerText>
          학생청원,
          <br />
          학생들의 목소리를 듣다
        </S.BannerText>
      </S.Banner>
    </S.Container>
  );
};

export default Main;
