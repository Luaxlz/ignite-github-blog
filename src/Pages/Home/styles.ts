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
  flex-direction: row;
  background-color: ${(props) => props.theme['base-profile']};
  width: 864px;
  height: 212px;

  align-items: center;
  padding: 32px 40px;
  gap: 32px;

  border-radius: 10px;
  box-shadow: 0 3px 28px 0 rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  min-width: 148px;
  height: 148px;
  background-size: cover;
  border-radius: 8px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  gap: 8px;
  padding: 0px 32px;
`;

export const AboutName = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  span {
    font-size: ${(props) => props.theme.fontSize['title-l']};
    color: ${(props) => props.theme['base-title']};
  }
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

export const ProfileSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;

  span {
    font-size: ${(props) => props.theme.fontSize['text-m']};
    color: ${(props) => props.theme['base-text']};
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 4px 0;

  font-size: ${(props) => props.theme.fontSize['text-m']};
  color: ${(props) => props.theme['base-subtitle']};

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  width: 864px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  #title {
    font-size: ${(props) => props.theme.fontSize['title-s']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  #quantity {
    font-size: ${(props) => props.theme.fontSize['text-s']};
    color: ${(props) => props.theme['base-span']};
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 6px;
  height: 50px;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};

  padding: 12px 16px;

  color: ${(props) => props.theme['base-text']};
  font-size: ${(props) => props.theme.fontSize['text-m']};
  outline: none;

  &::placeholder {
    font-size: ${(props) => props.theme.fontSize['text-m']};
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.blue};
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  margin-top: 48px;
`;

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 416px;
  height: 260px;
  gap: 20px;

  border-radius: 10px;
  padding: 37px 32px;

  border: 2px solid transparent;
  background-color: ${(props) => props.theme['base-post']};

  cursor: pointer;

  #titleContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    #title {
      width: 270px;
      font-size: ${(props) => props.theme.fontSize['title-m']};
      color: ${(props) => props.theme['base-title']};
    }

    #createdAt {
      position: relative;
      top: 7px;
      font-size: ${(props) => props.theme.fontSize['text-s']};
      color: ${(props) => props.theme['base-span']};
    }
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: all 0.3s ease-in;
  }
`;
