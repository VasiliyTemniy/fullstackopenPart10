import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';
import RepoItemNumerics from './RepoItemNumerics';

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    zIndex: 10,
    backgroundColor: 'white',
    elevation: 5,
  },
  mainInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingVertical: theme.gaps.repoItemGap / -2,
    marginLeft: 15,
    marginBottom: 10,
  },
  textChildren: {
    marginVertical: theme.gaps.repoItemGap / 2,
  },  
  numericsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tagStyle: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginVertical: theme.gaps.repoItemGap / 2,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});

const RepositoryItem = ({ fullName, description, language,
  forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl }) => {

    return (
      <View style={styles.itemContainer}>
        <View style={styles.mainInfoContainer}>
          <Image style={styles.logo} source={{ uri: ownerAvatarUrl }}/>
          <View style={styles.textContainer}>
            <Text fontWeight={'bold'} style={styles.textChildren}>{fullName}</Text>
            <Text color={'textSecondary'} style={styles.textChildren}>{description}</Text>
            <View style={styles.tagStyle}>
              <Text color={'textBright'}>{language}</Text>
            </View>
          </View>
        </View>
        <View style={styles.numericsContainer}>
          <RepoItemNumerics label={'Stars'} number={stargazersCount}/>
          <RepoItemNumerics label={'Forks'} number={forksCount}/>
          <RepoItemNumerics label={'Reviews'} number={reviewCount}/>
          <RepoItemNumerics label={'Rating'} number={ratingAverage}/>
        </View>
      </View>
    );

};

export default RepositoryItem;