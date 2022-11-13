import { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import LoadingIndicator from '../LoadingIndicator';
import ErrorScreen from '../ErrorScreen';

import useRepositories from '../../hooks/useRepositories';
import SortDirectionPicker from './SortDirectionPicker';

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

  const [ sortBy, setSortBy ] = useState("latest");

  const orderBy = sortBy === "latest"
    ? "CREATED_AT"
    : "RATING_AVERAGE";

  const orderDirection = sortBy === "lowest"
    ? "ASC"
    : "DESC";

  const { repositories, error, loading } = useRepositories(orderBy, orderDirection);

  if (loading) return <LoadingIndicator />;

  if (error) return <ErrorScreen error={error} />;

  return (
    <>
      <SortDirectionPicker sortBy={sortBy} setSortBy={setSortBy} />
      <RepositoryListContainer repositories={repositories} />
    </>
  );
};

export default RepositoryList;