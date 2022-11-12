import { FlatList, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { openURL } from 'expo-linking';

import RepositoryItem from '../RepositoryList/RepositoryItem';
import ReviewItem from './ReviewItem';
import LoadingIndicator from '../LoadingIndicator';
import ErrorScreen from '../ErrorScreen';

import useRepoDetails from '../../hooks/useRepoDetails';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryDetailsContainer = ({ repoDetails }) => {
  const reviews = repoDetails
    ? repoDetails.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() =>
        <>
          <RepositoryItem
            repository={repoDetails}
            showItemButton={true}
            onPress={() => openURL(repoDetails.url)}
          />
          <ItemSeparator/>
        </>
      }
      ListFooterComponent={ItemSeparator} // to make elevation work on last item
    />
  );
};

const RepositoryDetails = () => {
  
  const { repoId } = useParams();

  const { repoDetails, error, loading } = useRepoDetails(repoId);

  if (loading) return <LoadingIndicator />;

  if (error) return <ErrorScreen error={error} />;

  return (
    <RepositoryDetailsContainer repoDetails={repoDetails} />
  );
};

export default RepositoryDetails;