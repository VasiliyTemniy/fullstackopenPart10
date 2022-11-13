import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  picker: {
    marginLeft: 10,
  },
});

const SortDirectionPicker = ({ sortBy, setSortBy }) => {
  return (
    <Picker
      selectedValue={sortBy}
      prompt={"Select an item..."}
      style={styles.picker}
      onValueChange={(itemValue) =>
      setSortBy(itemValue)
    }>
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />
    </Picker>
  );
};

export default SortDirectionPicker;