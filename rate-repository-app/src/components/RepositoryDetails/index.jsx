import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useParams } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import { openURL } from 'expo-linking';

import RepositoryItem from '../RepositoryList/RepositoryItem';
import ReviewItem from './ReviewItem';
import Text from '../Text';

import useRepoDetails from '../../hooks/useRepoDetails';

import { GET_REPOSITORIES } from '../../graphql/queries';

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
  const client = useApolloClient();

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

  const { repositories } = client.readQuery({ query: GET_REPOSITORIES });

  const repository = repositories.edges.find(repo => repo.node.id === repoId).node;

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() =>
        <>
          <RepositoryItem
            repository={repository}
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