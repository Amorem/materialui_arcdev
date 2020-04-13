import { createMuiTheme } from "@material-ui/core/styles";

const amoremBlue = "#0B72B9";
const amoremOrange = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${amoremBlue}`,
      orange: `${amoremOrange}`,
    },
    primary: {
      main: `${amoremBlue}`,
    },
    secondary: {
      main: `${amoremOrange}`,
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
  },
});
