import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';

const useMeInfo = () => {
  
  const { data, error, loading, refetch } = useQuery(GET_CURRENT_USER, {fetchPolicy: 'cache-and-network'});

  return { me: data?.me, loading, error, refetch };
};

export default useMeInfo;