import { View, StyleSheet } from "react-native";
import { Searchbar } from 'react-native-paper';

import SortDirectionPicker from './SortDirectionPicker';

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

const RepositoryListHeader = (props) => (
  <View style={styles.headerContainer}>
    <Searchbar value={props.filter} onChangeText={(query) => props.setFilter(query)} />
    <SortDirectionPicker sortBy={props.sortBy} setSortBy={props.setSortBy} />
  </View>
);

export default RepositoryListHeader;