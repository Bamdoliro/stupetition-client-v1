import PetitionList from 'components/common/PetitionList';
import RadioTabMenu from 'components/common/RadioTabMenu';
import { useMyPetitionList } from 'features/MyPetitionFeature';
import NotFound from 'pages/404';
import Loading from 'pages/Loading';
import { useState } from 'react';
import { StatusType } from 'types/petition.type';
import * as S from './style';

const MyPetition = () => {
  const [status, setStatus] = useState<StatusType>('WROTE');

  const { data, isError, isLoading } = useMyPetitionList(status);

  if (isLoading) return <Loading />;
  if (isError) return <NotFound />;
  return (
    <S.MyPetitionLayout>
      <S.MyPetitionWrap>
        <S.ContentsBox>
          <S.RadioTabMenuWrap>
            <RadioTabMenu
              option="MY_PETITION"
              status={status}
              setStatus={setStatus}
            />
          </S.RadioTabMenuWrap>
          <S.PetitionListBox>
            {data.map((item) => (
              <PetitionList
                option="LIST"
                key={item.id}
                id={item.id}
                createdAt={item.createdAt}
                title={item.title}
                numberOfApprover={item.numberOfApprover}
                percentageOfApprover={item.percentageOfApprover}
                status={item.status}
              />
            ))}
          </S.PetitionListBox>
        </S.ContentsBox>
      </S.MyPetitionWrap>
    </S.MyPetitionLayout>
  );
};

export default MyPetition;
