import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';

const useMyReviews = (variables) => {
  
  const { data, error, loading, refetch, fetchMore } = useQuery(GET_CURRENT_USER, {
    variables: {
      includeReviews: true,
      ...variables,
    },
    fetchPolicy: 'cache-and-network'
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    me: data?.me,
    loading,
    error,
    refetch,
    fetchMore: handleFetchMore
  };
};

export default useMyReviews;