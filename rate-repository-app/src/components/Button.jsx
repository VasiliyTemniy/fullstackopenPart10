import { Pressable, StyleSheet } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    padding: 14,
    borderRadius: 5,
    marginVertical: theme.gaps.formInputsGap / 2,
  },
  buttonLabel: {
    alignSelf: 'center',
  },
});

const Button = ({ style, onPress, label }) => {

  const buttonStyle = ({ pressed }) => [
    {
      backgroundColor: pressed
        ? theme.colors.buttonTouched
        : theme.colors.primary
    },
    styles.button,
    style
  ]

  return (
    <Pressable onPress={onPress} style={buttonStyle}>
      <Text color={'textBright'} fontWeight={'bold'} style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
};

export default Button;