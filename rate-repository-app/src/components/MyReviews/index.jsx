import { FlatList, View, StyleSheet } from 'react-native';

import ReviewItem from '../ReviewItem';
import ErrorScreen from '../ErrorScreen';

import useMyReviews from '../../hooks/useMyReviews';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const MyReviewsContainer = ({ reviews, onEndReach }) => {
  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListFooterComponent={ItemSeparator}
    />
  );
};

const MyReviews = () => {
  
  const { me, error, loading, fetchMore } = useMyReviews({ first: 9 });

  if (loading) return null;

  if (error) return <ErrorScreen error={error.message} />;

  const onEndReach = () => { 
    fetchMore();
  };

  return (
    <MyReviewsContainer reviews={me.reviews} onEndReach={onEndReach} />
  );

};

export default MyReviews;