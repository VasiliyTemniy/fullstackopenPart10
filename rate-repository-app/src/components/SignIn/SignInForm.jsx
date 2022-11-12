import * as yup from 'yup';

import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
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

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be longer than 3 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(3, 'Password must be longer than 3 characters')
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => 
      <View style={styles.container}>
        <FormikTextInput name="username" placeholder="Username" style={styles.signinTextInput}/>
        <FormikTextInput name="password" placeholder="Password" style={styles.signinTextInput} secureTextEntry={true}/>
        <Button onPress={handleSubmit} label={'Sign in'} />
      </View>
    }
  </Formik>
);

export default SignInForm;