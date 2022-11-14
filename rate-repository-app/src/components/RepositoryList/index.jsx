import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { FlatList, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
//import LoadingIndicator from '../LoadingIndicator';
import ErrorScreen from '../ErrorScreen';
import RepositoryListHeader from './RepositoryListHeader';

import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {

  renderHeader = () => {
    const props = this.props;

    return <RepositoryListHeader
      sortBy={props.sortBy}
      setSortBy={props.setSortBy}
      filter={props.filter}
      setFilter={props.setFilter} 
    />;
  };

  render() {

    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
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
        ListHeaderComponent={this.renderHeader}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const RepositoryList = () => {

  const [ sortBy, setSortBy ] = useState("latest");
  const [ filter, setFilter ] = useState('');
  const [ searchKeyword ] = useDebounce(filter, 500);

  const orderBy = sortBy === "latest"
    ? "CREATED_AT"
    : "RATING_AVERAGE";

  const orderDirection = sortBy === "lowest"
    ? "ASC"
    : "DESC";

  const { repositories, error, fetchMore } = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword,
    first: 8
  });

  if (error) return <ErrorScreen error={error.message} />;

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortBy={sortBy}
      setSortBy={setSortBy}
      filter={filter}
      setFilter={setFilter}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;