import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";

import useAuthStorage from '../hooks/useAuthStorage';

import createAlert from "../utils/createAlert";

const useSignIn = () => {

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [login, result] = useMutation(SIGN_IN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message, 'error');
      createAlert('Error', error, 'OK', null);
    },
  });

  const signIn = async ({ username, password }) => {
    const { data } = await login({ variables: {credentials: { password, username }} });
    if (data) await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
    return data;
  };

  return [signIn, result];
};

export default useSignIn;