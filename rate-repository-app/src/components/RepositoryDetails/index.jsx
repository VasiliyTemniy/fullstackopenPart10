import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useParams } from 'react-router-native';
import { openURL } from 'expo-linking';

import RepositoryItem from '../RepositoryList/RepositoryItem';
import ReviewItem from './ReviewItem';
import Text from '../Text';

import useRepoDetails from '../../hooks/useRepoDetails';

import theme from '../../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  activityIndicator: {
    alignSelf: 'center',
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryDetails = () => {
  
  const { repoId } = useParams();

  const { repoDetails, error, loading } = useRepoDetails(repoId);

  if (loading) return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} style={styles.activityIndicator}/>
    </View>
  );

  if (error) {
    console.log('error: ', error);
    return (
      <View style={styles.container}>
        <Text>
          Please, reload the app.
        </Text>
      </View>
    );
  }

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

export default RepositoryDetails;