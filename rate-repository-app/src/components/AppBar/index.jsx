import { View, StyleSheet, ScrollView} from 'react-native';
import { useApolloClient } from '@apollo/client';

import Constants from 'expo-constants';

import theme from '../../theme';
import AppBarItem from './AppBarItem';
import Text from '../Text';

import useAuthStorage from '../../hooks/useAuthStorage';

import useMeInfo from '../../hooks/useMeInfo';

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

  const { me, error, loading } = useMeInfo();

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleSignout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  if (loading) return null;

  if (error) {
    console.log('error: ', error);
    return (
      <Text>
        Please, reload the app.
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarItem text={'Repositories'} path='/'/>
        {me
          ? <AppBarItem text={'Sign out'} onPress={handleSignout}/>
          : <AppBarItem text={'Sign in'} path='/Signin'/>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;