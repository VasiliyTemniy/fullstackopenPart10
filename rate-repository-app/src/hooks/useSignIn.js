import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const [login, result] = useMutation(SIGN_IN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message, 'error')
    },
  });

  const signIn = async ({ username, password }) => {
    await login({ variables: {credentials: { password, username }} });
    return result;
  };

  return [signIn, result];
};

export default useSignIn;