import Header from './components/Header';
import {
  AboutContainer,
  Avatar,
  DetailsContainer,
  PostsContainer,
  AboutName,
  Link,
  ProfileSummaryContainer,
  SocialContainer,
  Social,
} from './styles';
import avatarImg from '../../assets/IMG_4671.jpg';
import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from '@phosphor-icons/react';

export function Home() {
  return (
    <>
      <Header />
      <PostsContainer>
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
        <div>posts</div>
      </PostsContainer>
    </>
  );
}
