import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  numericItemContainer: {
    display: 'flex',
    alignItems: 'center'
  },
});

const reduceNumber = (number) => {
  if (number > 1000000) {
    return (Math.round(number/100000)/10) + 'M'
  } else if (number > 1000) {
    return (Math.round(number/100)/10) + 'k'
  } else
    return number;
};

const RepoItemNumerics = ({ label, number }) => {
  return (
    <View style={styles.numericItemContainer}>
      <Text fontWeight={'bold'}>{reduceNumber(number)}</Text>
      <Text color={'textSecondary'}>{label}</Text>
    </View>
  );
};

export default RepoItemNumerics;