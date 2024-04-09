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
import { useContext } from 'react';
import { PostsContext } from '../../contexts/PostsContext';
import formatDistanceToNow from '../../lib/formatDistanceToNow';

export function Home() {
  const { posts } = useContext(PostsContext);
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
            {posts.map((post) => {
              return (
                <a href={`/post/${post.number}`} key={post.id}>
                  <PostCard>
                    <div id='titleContainer'>
                      <span id='title'>{post.title}</span>
                      <span id='createdAt'>
                        {formatDistanceToNow(post.created_at)}
                      </span>
                    </div>
                    <EllipsisText text={post.body || 'nothing'} length={220} />
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
