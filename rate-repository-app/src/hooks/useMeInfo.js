import { useQuery } from '@apollo/client';
import { ME_QUERY } from '../graphql/queries';

const useMeInfo = () => {
  
  const { data, error, loading, refetch } = useQuery(ME_QUERY, {fetchPolicy: 'cache-and-network'});

  if (loading) return { loading };
  if (error) return { error };
  return { me: data.me, loading, error, refetch };
};

export default useMeInfo;