import { View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 30,
  },
});

const ErrorScreen = ({ error }) => (
  <View style={styles.container}>
    <Text fontSize={'subheading'}>
      Please, reload the app.
    </Text>
    <Text fontWeight={'bold'}>
      {error} happened
    </Text>
  </View>
);

export default ErrorScreen;