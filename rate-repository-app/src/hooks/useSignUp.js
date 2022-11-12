import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

import useSignIn from "./useSignIn";

import createAlert from "../utils/createAlert";

const useSignUp = () => {

  const [signIn] = useSignIn();

  const [createUser, result] = useMutation(CREATE_USER, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message, 'error');
      createAlert(error);
    },
  });

  const signUp = async ({ username, password }) => {
    const { data } = await createUser({ variables: {user: { password, username }} });
    if (data) {
      const loginData = await signIn({ username, password });
      return loginData;
    }
  };

  return [signUp, result];
};

export default useSignUp;