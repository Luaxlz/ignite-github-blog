import { useForm } from 'react-hook-form';
import { SearchFormContainer } from './styles';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { PostsContext } from '../../../../contexts/PostsContext';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchPosts } = useContext(PostsContext);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query);
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <input
        type='text'
        placeholder='Buscar conteúdo'
        {...register('query')}
        disabled={isSubmitting}
      />
    </SearchFormContainer>
  );
}
