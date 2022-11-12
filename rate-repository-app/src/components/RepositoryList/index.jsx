import { FlatList, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { Picker } from '@react-native-picker/picker';

import RepositoryItem from './RepositoryItem';
import LoadingIndicator from '../LoadingIndicator';
import ErrorScreen from '../ErrorScreen';

import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
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

  if (loading) return <LoadingIndicator />;

  if (error) return <ErrorScreen error={error} />;

  return (
    <>
      <Picker></Picker>
      <RepositoryListContainer repositories={repositories} />
    </>
  );
};

export default RepositoryList;