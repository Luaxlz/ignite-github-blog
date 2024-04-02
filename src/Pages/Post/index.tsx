import { useParams } from 'react-router-dom';
import Header from '../Home/components/Header';
import {
  AboutContainer,
  ActionContainer,
  Link,
  PageContainer,
  PostDetails,
  PostInfo,
  PostsContainer,
} from './styles';
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react';

export default function Post() {
  const { postId } = useParams();
  return (
    <>
      <Header />
      <PageContainer>
        <AboutContainer>
          <ActionContainer>
            <Link>
              <CaretLeft />
              <a href='/'>VOLTAR</a>
            </Link>
            <Link>
              <a href='/'>VER NO GITHUB</a>
              <ArrowSquareOut size={12} weight='bold' />
            </Link>
          </ActionContainer>
          <PostDetails>
            <span>Javascript data types and data structures</span>
            <PostInfo>
              <span>
                <GithubLogo size={18} />
                Luaxlz
              </span>
              <span>
                <Calendar size={18} />
                Há 1 dia
              </span>
              <span>
                <ChatCircle weight='fill' size={18} />5 comentários
              </span>
            </PostInfo>
          </PostDetails>
        </AboutContainer>
        <PostsContainer>
          <h1>POST: {postId}</h1>
        </PostsContainer>
      </PageContainer>
    </>
  );
}
