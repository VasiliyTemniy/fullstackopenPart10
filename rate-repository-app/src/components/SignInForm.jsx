import { View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';

import Button from './Button';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    padding: 20,
    zIndex: 10,
    backgroundColor: theme.colors.containerBackground,
    elevation: 5,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: theme.gaps.formInputsGap / 2,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
  <View style={styles.container}>
    <FormikTextInput name="username" placeholder="Username" style={styles.textInput}/>
    <FormikTextInput name="password" placeholder="Password" style={styles.textInput} secureTextEntry={true}/>
    <Button onPress={onSubmit} label={'Sign in'} />
  </View>
  );
};

export default SignInForm;