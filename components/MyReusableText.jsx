/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import { Text } from 'react-native';
function MyReusableText({ text="Walang jowa", kulay = "red" }) {
  return <Text style={{ fontSize: 40, color: kulay }}>{text}</Text>;
}

export default MyReusableText;
