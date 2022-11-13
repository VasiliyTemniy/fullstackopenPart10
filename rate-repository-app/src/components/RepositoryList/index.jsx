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
      />
    );
  }
}

const RepositoryList = () => {

  const [ sortBy, setSortBy ] = useState("latest");
  const [ filter, setFilter ] = useState('');
  const [ filterForUse ] = useDebounce(filter, 500);

  const orderBy = sortBy === "latest"
    ? "CREATED_AT"
    : "RATING_AVERAGE";

  const orderDirection = sortBy === "lowest"
    ? "ASC"
    : "DESC";

  const { repositories, error /* , loading */ } = useRepositories(orderBy, orderDirection, filterForUse);

  //if (loading) return <LoadingIndicator />;  // I had to disable this to make 10.24 working without unmounting of 
                                               // RepositoryListHeader. Another solution was to move Filter/Search and
                                               // SortDirectionPicker out of RepositoryList on a new top layer component
                                               // with "Animated" React Native component to make them disappear with scrolling
                                               // this is sad that exercise restricts solution to be inside of
                                               // "ListHeaderComponent" prop of FlatList.
                                               // (qoute: "Put the text input component in the FlatList component's header.")

  if (error) return <ErrorScreen error={error} />;

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortBy={sortBy}
      setSortBy={setSortBy}
      filter={filter}
      setFilter={setFilter}
    />
  );
};

export default RepositoryList;