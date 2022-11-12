import SignUpForm from './SignUpForm';

import useSignUp from '../../hooks/useSignUp';
import { useNavigate } from 'react-router-native';

const SignUp = () => {

  const [signUp] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async values => {
    const { username, password } = values;

    try {
      const data = await signUp({ username, password });
      if (data) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;