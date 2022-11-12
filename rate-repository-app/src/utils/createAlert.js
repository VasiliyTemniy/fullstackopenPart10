import { Alert } from "react-native";

const createAlert = (e) =>
  Alert.alert(
    "Error",
    `${e}`,
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

export default createAlert;