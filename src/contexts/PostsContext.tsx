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

interface GitHubUser {
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
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

type PostsContextType = {
  posts: Issue[];
  user: GitHubUser | undefined;
  fetchPosts: (query: string) => Promise<void>;
};

type PostsProviderProps = {
  children: ReactNode;
};

export const PostsContext = createContext({} as PostsContextType);

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Issue[]>([]);
  const [user, setUser] = useState<GitHubUser | undefined>(undefined);

  async function fetchPosts(query: string = '') {
    const username = 'rocketseat-education';
    const repo = 'reactjs-github-blog-challenge';
    const formattedQuery = query.replaceAll(' ', '%20');
    const response = await api.get(
      `/search/issues?q=${formattedQuery}%20repo:${username}/${repo}`,
    );
    setPosts([...response.data.items]);
  }

  async function fetchUser() {
    const username = 'Luaxlz';
    const response = await api.get(`/users/${username}`);
    console.log(response.data);
    setUser(response.data);
  }

  useEffect(() => {
    fetchPosts();
    fetchUser();
  }, []);
  return (
    <PostsContext.Provider value={{ posts, user, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
