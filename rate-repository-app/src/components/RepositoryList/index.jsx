import useRepositories from '../../hooks/useRepositories';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';

import RepositoryItem from './RepositoryItem';
import Text from '../Text';

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

const RepositoryList = () => {

  const { repositories, error, loading } = useRepositories();

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

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item, index, separators }) => (
        <RepositoryItem
          fullName={item.fullName}
          description={item.description}
          language={item.language}
          forksCount={item.forksCount}
          stargazersCount={item.stargazersCount}
          ratingAverage={item.ratingAverage}
          reviewCount={item.reviewCount}
          ownerAvatarUrl={item.ownerAvatarUrl}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}
          index={index} />
      )}
    />
  );
};

export default RepositoryList;