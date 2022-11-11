import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Link } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import Text from '../Text';

import useRepositories from '../../hooks/useRepositories';

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

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <Link to={`/${item.id}`}>
          <RepositoryItem
            repository={item}
          />
        </Link>
      )}
    />
  );
};

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

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;