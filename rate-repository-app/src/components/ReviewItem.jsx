import { View, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';

import Text from './Text';
import Button from './Button';

import theme from '../theme';

import useDeleteReview from '../hooks/useDeleteReview';
import createAlert from '../utils/createAlert';

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    zIndex: 10,
    backgroundColor: theme.colors.containerBackground,
    elevation: 5,
  },
  topsideContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  ratingContainer: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.primary,
  },
  textContainer: {
    display: 'flex',
    flexShrink: 1,
    paddingVertical: theme.gaps.reviewItemGap / -2,
    marginLeft: 15,
    marginBottom: 10,
  },
  reviewButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  leftButton: {
    marginRight: theme.gaps.reviewItemGap,
    flexGrow: 1,
  },
  rightButton: {
    marginLeft: theme.gaps.reviewItemGap,
    flexGrow: 1,
    backgroundColor: theme.colors.deleteButton,
  },
  textChildren: {
    marginTop: theme.gaps.reviewItemGap / 2,
  },  
});

const ReviewButtonContainer = ({ review }) => {

  const navigate = useNavigate();
  const [ deleteReview ] = useDeleteReview();

  const handleViewPress = () => {
    navigate(`/${review.repositoryId}`);
  };

  const handleDeletePress = () => {
    createAlert('Delete review', 'Are you sure you want to delete this review?', 'DELETE', () => deleteReview(review.id));
    
  };

  return (
    <View style={styles.reviewButtonContainer}>
      <Button onPress={handleViewPress} label={'View repository'} style={styles.leftButton}/>
      <Button onPress={handleDeletePress} label={'Delete review'} style={styles.rightButton}/>
    </View>
  );
};

const ReviewItem = ({ review, myReviewsPage = false }) => {

  const date = new Date(review.createdAt);
  const dateString = 
    ("0" + date.getDate()).slice(-2) + "." + 
    ("0"+(date.getMonth()+1)).slice(-2) + "." + 
    date.getFullYear();

  return (
    <View style={styles.itemContainer}>
      <View style={styles.topsideContainer}>
        <View style={styles.ratingContainer}>
          <Text color={'primary'} fontWeight={'bold'}>
            {review.rating}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text fontWeight={'bold'}>
            {myReviewsPage
              ? review.repository.fullName
              : review.user.username
            }
          </Text>
          <Text color={'textSecondary'}>
            {dateString}
          </Text>
          <Text style={styles.textChildren}>
            {review.text}
          </Text>
        </View>
      </View>
      {myReviewsPage && <ReviewButtonContainer review={review} />}
    </View>
  );

};

export default ReviewItem;