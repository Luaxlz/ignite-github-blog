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
import { SearchForm } from './components/SearchForm';

export function Home() {
  const { posts, user } = useContext(PostsContext);
  return (
    <>
      <Header />
      <PageContainer>
        <AboutContainer>
          <Avatar src={user?.avatar_url} alt='user profile image' />
          <DetailsContainer>
            <AboutName>
              <span>{user?.name}</span>
              <Link>
                <a href='https://github.com/Luaxlz' target='_blank'>
                  Github
                </a>
                <ArrowSquareOut size={12} weight='bold' />
              </Link>
            </AboutName>
            <ProfileSummaryContainer>
              <span>{user?.bio}</span>
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
                  <Users size={18} weight='fill' />
                  {user?.followers}{' '}
                  {user?.followers === 1 ? 'seguidor' : 'seguidores'}
                </Social>
              </SocialContainer>
            </ProfileSummaryContainer>
          </DetailsContainer>
        </AboutContainer>
        <PostsContainer>
          <TitleContainer>
            <span id='title'>Publicações</span>
            <span id='quantity'>
              {user?.public_repos}{' '}
              {user?.public_repos === 1 ? 'publicação' : 'publicações'}
            </span>
          </TitleContainer>
          <SearchForm />
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
