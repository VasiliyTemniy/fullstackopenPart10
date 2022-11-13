import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection) => {
  
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection },
    fetchPolicy: 'cache-and-network'
  });

  if (loading) return { loading };
  if (error) return { error };
  return { repositories: data.repositories, loading, error, refetch };
};

export default useRepositories;