import { View, StyleSheet } from 'react-native';
import FormikTextInput from '../FormikTextInput';

import Button from '../Button';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    padding: 20,
    zIndex: 10,
    backgroundColor: theme.colors.containerBackground,
    elevation: 5,
  },
  signinTextInput: {
    padding: 10,
    marginVertical: theme.gaps.formInputsGap / 2,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
  <View style={styles.container}>
    <FormikTextInput name="username" placeholder="Username" style={styles.signinTextInput}/>
    <FormikTextInput name="password" placeholder="Password" style={styles.signinTextInput} secureTextEntry={true}/>
    <Button onPress={onSubmit} label={'Sign in'} />
  </View>
  );
};

export default SignInForm;