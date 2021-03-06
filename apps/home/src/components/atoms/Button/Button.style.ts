import styled, { css } from 'styled-components';

export const AppContainer = styled.button`
  color: ${({ theme }) => theme.colors.white[0]};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.colors.black[0]};
  background-color: ${({ theme }) => theme.colors.black[0]};
  border-radius: 3px;
  display: block;
`;
export default css``;
