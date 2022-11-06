import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarItem from './AppBarItem';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    backgroundColor: theme.colors.menuBackground,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    /* justifyContent: 'space-around', */
    alignItems: 'center',
    gap: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarItem onPress={() => {null}} text={'Repositories'}/>
    </View>
  );
};

export default AppBar;