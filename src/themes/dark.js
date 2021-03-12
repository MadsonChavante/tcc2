const { DarkTheme } = require("@react-navigation/native");

const Dark = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: "#202125",
      primary: "#21c25e"
    },
  };

export default Dark;