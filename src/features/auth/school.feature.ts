import { useQuery } from 'react-query';
import { searchSchool } from 'apis/school.api';

export interface SchoolFeatureType {
  searchWord: string;
}

export interface SchoolType {
  name: string;
  id: number;
  emailDomain: string;
}

export const SchoolFeature = ({ searchWord }: SchoolFeatureType) => {
  const { data } = useQuery<SchoolType[]>(
    ['searchWord', searchWord],
    () => searchSchool(searchWord),
    {
      enabled: !!searchWord,
      select: (data) => data.slice(0, 10),
    },
  );

  return { data };
};
