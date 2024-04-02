import styled from 'styled-components';

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  top: -100px;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-profile']};
  width: 864px;
  height: 212px;

  padding: 32px 40px;
  gap: 32px;

  border-radius: 10px;
  box-shadow: 0 3px 28px 0 rgba(0, 0, 0, 0.2);
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Link = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 8px;
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    font-size: ${(props) => props.theme.fontSize.link};
    font-weight: bold;
  }
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  svg {
    color: ${(props) => props.theme.blue};
  }
`;

export const PostDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-size: ${(props) => props.theme.fontSize['title-l']};
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;
    font-weight: 700;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;

  span {
    font-size: ${(props) => props.theme.fontSize['text-m']};
    line-height: 1.6;
    font-weight: 400;
    color: ${(props) => props.theme['base-span']};

    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  width: 864px;
`;
