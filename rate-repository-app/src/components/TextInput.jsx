import { TextInput as NativeTextInput } from 'react-native';

//import theme from '../theme';

const TextInput = ({ style, /* error, */ ...props }) => {
  const textInputStyle = [style];


  return <NativeTextInput style={textInputStyle} {...props}/>;
};

export default TextInput;
