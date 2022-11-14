import { View, StyleSheet, ScrollView } from 'react-native';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import Constants from 'expo-constants';

import theme from '../../theme';

import AppBarItem from './AppBarItem';
import ErrorScreen from '../ErrorScreen';

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
  const navigate = useNavigate();

  const handleSignout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/");
  };

  if (loading) return null;

  if (error) return <ErrorScreen error={error.message} />;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarItem text={'Repositories'} path='/'/>
        {me && <AppBarItem text={'Create a review'} path='/review' />}
        {me && <AppBarItem text={'My reviews'} path='/myreviews' />}
        {me && <AppBarItem text={'Sign out'} onPress={handleSignout} />}
        {!me && <AppBarItem text={'Sign in'} path='/signin' />}
        {!me && <AppBarItem text={'Sign up'} path='/signup' />}
      </ScrollView>
    </View>
  );
};

export default AppBar;