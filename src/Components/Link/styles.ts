import styled from 'styled-components';

export const CustomLink = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  width: max-content;
  height: max-content;
  cursor: pointer;
  text-transform: uppercase;
  color: ${(props) => props.theme.blue};
  font-size: ${(props) => props.theme.fontSize.link};
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`;
