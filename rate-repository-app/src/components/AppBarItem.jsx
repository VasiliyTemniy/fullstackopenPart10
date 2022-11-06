import { Pressable } from 'react-native';
import Text from './Text';

const AppBarItem = (props) => (
  <Pressable onPress={props.onPress}>
    <Text color={'textBright'} fontWeight={'bold'} >
      {props.text}
    </Text>
  </Pressable>
);

export default AppBarItem;