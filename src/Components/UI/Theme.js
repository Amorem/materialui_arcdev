import { createMuiTheme } from "@material-ui/core/styles";

const amoremBlue = "#0B72B9";
const amoremOrange = "#FFBA60";
const amoremGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: amoremBlue,
      orange: amoremOrange,
    },
    primary: {
      main: amoremBlue,
    },
    secondary: {
      main: amoremOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: amoremBlue,
      lineHeight: 1.5,
    },

    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: amoremBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: amoremBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: 300,
      color: amoremGrey,
    },
    learnButton: {
      borderColor: amoremBlue,
      color: amoremBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});
