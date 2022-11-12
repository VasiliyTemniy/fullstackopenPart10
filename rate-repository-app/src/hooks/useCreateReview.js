import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

import createAlert from "../utils/createAlert";

const useCreateReview = () => {

  const [sendReview, result] = useMutation(CREATE_REVIEW, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message, 'error');
      createAlert(error);
    },
  });

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const { data } = await sendReview({ variables: {review: { ownerName, repositoryName, rating: Number(rating), text }} });
    return data;
  };

  return [createReview, result];
};

export default useCreateReview;