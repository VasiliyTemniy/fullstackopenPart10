import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292E',
    textSecondary: '#586069',
    textBright: '#FFFEFF',
    primary: '#0366D6',
    menuBackground: '#25292C',
    mainBackground: '#E1E4E8',
    containerBackground: '#FFFFFF',
    inputBorderColor: '#C0C0C0',
    inputActiveBorderColor: '#24292E',
    inputErrorBorderColor: '#D73A4A',
    inputErrorTextColor: '#D73A4A',
    buttonTouched: '#5BA8FD',
    deleteButton: '#D4384E',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  gaps: {
    repoItemGap: 6,
    reviewItemGap: 6,
    appBarItemGap: 20,
    formInputsGap: 10,
  }
};

export default theme;