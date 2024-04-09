import axios from 'axios';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface Reaction {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: any[];
  state: string;
  locked: boolean;
  assignee: any;
  assignees: any[];
  milestone: any;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: string;
  active_lock_reason: string | null;
  body: string;
  reactions: Reaction;
  timeline_url: string;
  performed_via_github_app: any;
  state_reason: string | null;
  score: number;
}

type PostsContextType = {
  posts: Issue[];
};

type PostsProviderProps = {
  children: ReactNode;
};

export const PostsContext = createContext({} as PostsContextType);

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Issue[]>([]);

  async function fetchPosts(query?: string) {
    const response = await api.get(
      '/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge',
    );
    setPosts([...response.data.items]);
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}
