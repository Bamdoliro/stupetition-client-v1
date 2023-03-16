import * as T from 'styles/text.style';
import { color } from 'styles/theme.style';
import styled from 'styled-components';

export const PrintList = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  * {
    -webkit-print-color-adjust: exact !important; /* Chrome, Safari 6 – 15.3, Edge */
    color-adjust: exact !important; /* Firefox 48 – 96 */
  }
  @media print {
    height: 279.7px;
  }
`;

export const PrintListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 63.3%;
  @media print {
    width: 80%;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const SchoolName = styled(T.p3)`
  color: ${color.gray900};
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Info = styled(T.H5)`
  color: ${color.gray900};
`;

export const Logo = styled.img``;

export const Url = styled(T.caption)`
  text-align: center;
`;

export const Table = styled.div`
  width: 100%;
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const TableHeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50px;
  background-color: ${color.gray50};
`;

export const TableHeaderItemText = styled(T.p2)`
  color: ${color.gray700};
`;

export const TableBody = styled.div`
  display: flex;
  align-items: center;
`;

export const TableBodyItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50px;
  border: 1px solid ${color.gray100};
`;

export const TableBodyItemText = styled(T.p2)`
  color: ${color.gray900};
`;
