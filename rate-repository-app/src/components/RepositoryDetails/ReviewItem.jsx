import { View, StyleSheet } from 'react-native';

import Text from '../Text';

import theme from '../../theme';

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    zIndex: 10,
    backgroundColor: theme.colors.containerBackground,
    elevation: 5,
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
    paddingVertical: theme.gaps.repoItemGap / -2,
    marginLeft: 15,
    marginBottom: 10,
  },
  textChildren: {
    marginTop: theme.gaps.repoItemGap / 2,
  },  
});


const ReviewItem = ({ review }) => {

  const date = new Date(review.createdAt);
  const dateString = 
    ("0" + date.getDate()).slice(-2) + "." + 
    ("0"+(date.getMonth()+1)).slice(-2) + "." + 
    date.getFullYear();

  return (
    <View style={styles.itemContainer}>
      <View style={styles.ratingContainer}>
        <Text color={'primary'} fontWeight={'bold'}>
          {review.rating}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text fontWeight={'bold'}>
          {review.user.username}
        </Text>
        <Text color={'textSecondary'}>
          {dateString}
        </Text>
        <Text style={styles.textChildren}>
          {review.text}
        </Text>
      </View>
    </View>
  );

};

export default ReviewItem;