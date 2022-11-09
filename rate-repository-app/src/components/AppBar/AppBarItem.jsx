import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  appBarChildren: {
    paddingHorizontal: theme.gaps.appBarItemGap,
    paddingVertical: theme.gaps.appBarItemGap,
  },
});

const AppBarItem = ({ path, text, onPress }) => (
  <Pressable onPress={onPress}>
    {path 
    ? <Link to={path}>
        <Text color={'textBright'} fontWeight={'bold'} style={styles.appBarChildren}>
          {text}
        </Text>
      </Link>
    : <Text color={'textBright'} fontWeight={'bold'} style={styles.appBarChildren}>
        {text}
      </Text>
    }
  </Pressable>
);

export default AppBarItem;