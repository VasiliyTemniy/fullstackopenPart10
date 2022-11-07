import { useState } from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
  },
  colorInactiveInput: {
    borderColor: theme.colors.inputBorderColor,
  },
  colorActiveInput: {
    borderColor: theme.colors.inputActiveBorderColor,
  },
  colorErrorInput: {
    borderColor: theme.colors.inputErrorBorderColor,
  },
});

const TextInput = ({ style, error, ...props }) => {

  // I tried to use useRef, but its .current was always null
  // so textInputRef.current.isFocused() did not work
  // Tried to avoid using useState to make less component rendering
  const [focused, setFocused] = useState(false);

  const textInputStyle = [
    styles.textInput,
    !focused && styles.colorInactiveInput,
    focused && styles.colorActiveInput,
    error && styles.colorErrorInput,
    style,
  ];

  return (
    <NativeTextInput 
      style={textInputStyle}
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFocused(false)
        props.onBlur();
      }}/>
  );
};

export default TextInput;
