import * as yup from 'yup';

import SignInForm from './SignInForm';
import { Formik } from 'formik';

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

const SignIn = () => {

  const onSubmit = values => {
    const username = values.username;
    const password = values.password;

    if (username && password) {
      console.log(`ooomkay let us start from here`);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;