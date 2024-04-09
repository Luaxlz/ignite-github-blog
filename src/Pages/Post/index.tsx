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
import { api } from '../../lib/axios';
import { useEffect, useState } from 'react';
import { Issue } from '../../contexts/PostsContext';

export default function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState<Issue>();

  const fetchPostDetails = async (postId: string) => {
    const response = await api.get(
      `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${postId}`,
    );
    //@ts-ignore
    setPost(response.data);
  };

  useEffect(() => {
    fetchPostDetails(postId as string);
  }, []);
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
            <span>{post?.title}</span>
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
        <PostsContainer>{post?.body}</PostsContainer>
      </PageContainer>
    </>
  );
}
