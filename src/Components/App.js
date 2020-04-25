import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./UI/Header";
import theme from "./UI/Theme";
import Footer from "./UI/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route exact path="/services">
            <Services setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Route>
          <Route exact path="/software">
            <CustomSoftware
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          </Route>
          <Route exact path="/mobileapps">
            <MobileApps
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          </Route>
          />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>Revolution</div>}
          />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
