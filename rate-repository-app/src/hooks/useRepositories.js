import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network'});

  if (loading) return { loading };
  if (error) return { error };
  return { repositories: data.repositories, loading, error, refetch };
};

export default useRepositories;