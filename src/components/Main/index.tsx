import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getBoard } from 'api/board';
import { StatusType, GetBoardType } from 'type/board/board.type';
import PetitionList from './PetitionList';
import RadioTabMenu from './RadioTabMenu';
import * as S from './style';

const Main = () => {
  const [status, setStatus] = useState<StatusType>('PETITION');

  const { isLoading, isError, data } = useQuery<GetBoardType[]>(
    ['status', status],
    () => getBoard(status),
  );

  return (
    <S.Container>
      <S.Banner>
        <S.BannerText>
          학생청원,
          <br />
          학생들의 목소리를 듣다
        </S.BannerText>
      </S.Banner>
      <S.ContentsWrap>
        <RadioTabMenu setStatus={setStatus} status={status} />
        <S.PetitionWrap>
          {data?.map((item) => {
            return (
              <PetitionList
                key={item.id}
                createdAt={item.createdAt}
                title={item.title}
                numberOfAgreers={item.numberOfAgreers}
                status={status}
              />
            );
          })}
        </S.PetitionWrap>
      </S.ContentsWrap>
    </S.Container>
  );
};

export default Main;
