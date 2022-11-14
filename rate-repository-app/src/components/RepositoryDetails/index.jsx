import { FlatList, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { openURL } from 'expo-linking';

import RepositoryItem from '../RepositoryItem';
import ReviewItem from '../ReviewItem';
import ErrorScreen from '../ErrorScreen';

import useRepoDetails from '../../hooks/useRepoDetails';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryDetailsContainer = ({ repoDetails, onEndReach }) => {
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
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListFooterComponent={ItemSeparator}
    />
  );
};

const RepositoryDetails = () => {
  
  const { repoId } = useParams();

  const { repoDetails, error, loading, fetchMore } = useRepoDetails({ repoId, first: 4 });

  if (loading) return null;

  if (error) return <ErrorScreen error={error.message} />;

  const onEndReach = () => { 
    fetchMore();
  };

  return (
    <RepositoryDetailsContainer repoDetails={repoDetails} onEndReach={onEndReach} />
  );
};

export default RepositoryDetails;