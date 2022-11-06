import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarItem from './AppBarItem';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.menuBackground,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarItem text={'Repositories'} path='/'/>
        <AppBarItem text={'Sign in'} path='/Signin'/>
      </ScrollView>
    </View>
  );
};

export default AppBar;