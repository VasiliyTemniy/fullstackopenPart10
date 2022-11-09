import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";

import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [login, result] = useMutation(SIGN_IN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message, 'error')
    },
  });

  const signIn = async ({ username, password }) => {
    const { data } = await login({ variables: {credentials: { password, username }} });
    await authStorage.setAccessToken(data);
    apolloClient.resetStore();
    return data;
  };

  return [signIn, result];
};

export default useSignIn;