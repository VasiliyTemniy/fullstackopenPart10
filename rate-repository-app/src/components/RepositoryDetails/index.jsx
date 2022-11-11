import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useParams } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import { openURL } from 'expo-linking';

import RepositoryItem from '../RepositoryList/RepositoryItem';
import Text from '../Text';

import useRepoDetails from '../../hooks/useRepoDetails';

import { GET_REPOSITORIES } from '../../graphql/queries';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  activityIndicator: {
    alignSelf: 'center',
  }
});

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

  const { repositories } = client.readQuery({ query: GET_REPOSITORIES });

  const repository = repositories.edges.find(repo => repo.node.id === repoId).node;

  return (
    <RepositoryItem
      fullName={repository.fullName}
      description={repository.description}
      language={repository.language}
      forksCount={repository.forksCount}
      stargazersCount={repository.stargazersCount}
      ratingAverage={repository.ratingAverage}
      reviewCount={repository.reviewCount}
      ownerAvatarUrl={repository.ownerAvatarUrl}
      showItemButton={true}
      onPress={() => openURL(repoDetails.url)}
    />
  );
};

export default RepositoryDetails;