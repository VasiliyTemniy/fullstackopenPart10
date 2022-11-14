import { useQuery } from '@apollo/client';
import { GET_REPO_DETAILS } from '../graphql/queries';

const useRepoDetails = (variables) => {
  
  const { data, error, loading, refetch, fetchMore } = useQuery(GET_REPO_DETAILS, {
    variables,
    fetchPolicy: 'cache-and-network'
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repoDetails: data?.repository,
    loading,
    error,
    refetch,
    fetchMore: handleFetchMore
  };
};

export default useRepoDetails;