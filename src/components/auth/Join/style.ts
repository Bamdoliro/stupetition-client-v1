import styled from 'styled-components';
import { color } from 'styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${color.gray300};
`;

export const Join = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Wrap = styled.div`
  padding-left: 9.125rem;
  width: 56%;
  height: 100%;
  background-color: ${color.white};
`;
