import Header from './components/Header';
import {
  AboutContainer,
  Avatar,
  DetailsContainer,
  PageContainer,
  AboutName,
  Link,
  ProfileSummaryContainer,
  SocialContainer,
  Social,
  PostsContainer,
  TitleContainer,
  Input,
  CardsContainer,
  PostCard,
} from './styles';
import avatarImg from '../../assets/IMG_4671.jpg';
import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from '@phosphor-icons/react';
//@ts-ignore
import EllipsisText from 'react-ellipsis-text';

export function Home() {
  return (
    <>
      <Header />
      <PageContainer>
        <AboutContainer>
          <Avatar src={avatarImg} alt='user profile image' />
          <DetailsContainer>
            <AboutName>
              <span>Lucas Angeli</span>
              <Link>
                <a href='https://github.com/Luaxlz' target='_blank'>
                  Github
                </a>
                <ArrowSquareOut size={12} weight='bold' />
              </Link>
            </AboutName>
            <ProfileSummaryContainer>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium maiores facilis aliquid reiciendis
              </span>
              <SocialContainer>
                <Social>
                  <GithubLogo size={18} weight='fill' />
                  Luaxlz
                </Social>
                <Social>
                  <Buildings size={18} weight='fill' />
                  Agroflux
                </Social>
                <Social>
                  <Users size={18} weight='fill' />2 seguidores
                </Social>
              </SocialContainer>
            </ProfileSummaryContainer>
          </DetailsContainer>
        </AboutContainer>
        <PostsContainer>
          <TitleContainer>
            <span id='title'>Publicações</span>
            <span id='quantity'>6 publicações</span>
          </TitleContainer>
          <Input type='text' placeholder='Buscar conteúdo' />
          <CardsContainer>
            {Array.from({ length: 6 }).map((_, i) => {
              return (
                <a href={`/post/${i}`} key={i + new Date().getMilliseconds()}>
                  <PostCard>
                    <div id='titleContainer'>
                      <span id='title'>
                        JavaScript data types and data structures
                      </span>
                      <span id='createdAt'>Há 1 dia</span>
                    </div>
                    <EllipsisText
                      text={`Programming languages all have built-in data structures, but
                    these often differ from one language to another. This article
                    attempts to list the built-in data structures available in
                    JavaScript and what properties they have. These can be used to
                    build other data structures. Wherever possible, comparisons with
                    other languages are drawn. Dynamic typing JavaScript is a
                    loosely typed and dynamic language. Variables in JavaScript are
                    not directly associated with any particular value type, and any
                    variable can be assigned (and re-assigned) values of all types:
                    let foo = 42; // foo is now a number foo = 'bar'; // foo is now
                    a string foo = true; // foo is now a boolean`}
                      length={220}
                    />
                  </PostCard>
                </a>
              );
            })}
          </CardsContainer>
        </PostsContainer>
      </PageContainer>
    </>
  );
}
