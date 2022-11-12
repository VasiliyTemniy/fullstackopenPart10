import { View, StyleSheet, ActivityIndicator } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  activityIndicator: {
    alignSelf: 'center',
  }
});

const LoadingIndicator = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={theme.colors.primary} style={styles.activityIndicator}/>
  </View>
);

export default LoadingIndicator;