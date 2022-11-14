import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

import createAlert from "../utils/createAlert";
import useMyReviews from "./useMyReviews";

const useDeleteReview = () => {

  const { refetch } = useMyReviews();

  const [sendDeleteReview, result] = useMutation(DELETE_REVIEW, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message, 'error');
      createAlert('Error', error, 'OK', null);
    },
  });

  const deleteReview = async (id) => {
    const { data } = await sendDeleteReview({ variables: { deleteReviewId: id } });
    refetch();
    return data;
  };

  return [deleteReview, result];
};

export default useDeleteReview;