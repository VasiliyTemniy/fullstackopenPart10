import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import theme from '../theme';
import AppBar from './AppBar';
import CreateReview from './CreateReview';
import MyReviews from './MyReviews';
import RepositoryDetails from './RepositoryDetails';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SignUp from './SignUp';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/:repoId" element={<RepositoryDetails />} exact/>
        <Route path="/review" element={<CreateReview />} exact/>
        <Route path="/myreviews" element={<MyReviews />} exact/>
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;