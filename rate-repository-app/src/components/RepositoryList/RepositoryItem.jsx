import { View, Image, StyleSheet } from 'react-native';

import RepoItemNumerics from './RepoItemNumerics';
import Button from '../Button';
import Text from '../Text';

import theme from '../../theme';

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    zIndex: 10,
    backgroundColor: theme.colors.containerBackground,
    elevation: 5,
  },
  mainInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  textContainer: {
    display: 'flex',
    flexShrink: 1,
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
  button: {
    marginTop: 20,
  },
});

const RepositoryItem = ({ repository, showItemButton = false, onPress }) => {

  return (
    <View style={styles.itemContainer} testID="repositoryItem">
      <View style={styles.mainInfoContainer}>
        <Image style={styles.logo} source={{ uri: repository.ownerAvatarUrl }}/>
        <View style={styles.textContainer}>
          <Text fontWeight={'bold'} style={styles.textChildren}>{repository.fullName}</Text>
          <Text color={'textSecondary'} style={styles.textChildren}>{repository.description}</Text>
          <View style={styles.tagStyle}>
            <Text color={'textBright'}>{repository.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.numericsContainer}>
        <RepoItemNumerics label={'Stars'} number={repository.stargazersCount}/>
        <RepoItemNumerics label={'Forks'} number={repository.forksCount}/>
        <RepoItemNumerics label={'Reviews'} number={repository.reviewCount}/>
        <RepoItemNumerics label={'Rating'} number={repository.ratingAverage}/>
      </View>
      {showItemButton && <Button onPress={onPress} label={'Open in GitHub'} style={styles.button}/>}
    </View>
  );

};

export default RepositoryItem;