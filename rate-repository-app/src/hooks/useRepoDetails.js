import { useQuery } from '@apollo/client';
import { GET_REPO_DETAILS } from '../graphql/queries';

const useRepoDetails = ( repoId ) => {
  
  const { data, error, loading, refetch } = useQuery(GET_REPO_DETAILS, { variables: { repoId: repoId }, fetchPolicy: 'cache-and-network'});

  if (loading) return { loading };
  if (error) return { error };
  return { repoDetails: data.repository, loading, error, refetch };
};

export default useRepoDetails;