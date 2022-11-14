import { Alert } from "react-native";

const createAlert = (title, text, confirmLabel, handleConfirm) =>
  Alert.alert(
    `${title}`,
    `${text}`,
    [
      {
        text: "CANCEL",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: `${confirmLabel}`, onPress: () => handleConfirm() }
    ]
  );

export default createAlert;