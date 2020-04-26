import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Lottie from "react-lottie";

import vision from "../assets/vision.svg";
import technologyAnimation from "../animations/technologyAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

export default function Revolution() {
  const classes = useStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2" style={{ fontFamily: "Pacifico" }}>
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        alignItems="center"
      >
        <Grid item lg>
          <img
            src={vision}
            alt="moutain through binoculars"
            style={{ maxWidth: "40em", marginRight: "5em" }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4" gutterBottom align="right">
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph align="right">
              Something fishy about this one, we prefer our lorem ipsum grilled
              or lightly seared. One fish, two fish, red fish, blue fish; get a
              dozen or more with Tuna Ipsum.
            </Typography>
            <Typography variant="body1" paragraph align="right">
              Add a bit of New Zealand quirkiness to your mockups with this
              Kiwiana inspired lorem ipsum generator, featuring items and icons
              from the island's history.
            </Typography>
            <Typography variant="body1" paragraph align="right">
              Disrupt your projects with compassion using the Social Good lorem
              ipsum text generator, and make way for all the entrepreneur speak
              you can possibly handle.
            </Typography>
            <Typography variant="body1" paragraph align="right">
              Pitched as lorem ipsum for future-of-news nerds, Nieman Lab's
              generator uses “some of the most common catch phrases, buzzwords,
              and bon mots of the future-of-news crowd.”
            </Typography>
            <Typography variant="body1" paragraph align="right">
              Feeling gangsta today? Bust a cap in your new project with some
              lorem ipsum that is off the hook, yo. So fresh it might just put
              the rest of your work to shame.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        alignItems="center"
      >
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4" gutterBottom align="left">
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Add some oomph to your mockups with a bit of Bavarian. Featuring
              regular lorem ipsum style Bavarian text, with the option for extra
              oomph in the form of expletives.
            </Typography>
            <Typography variant="body1" paragraph>
              Dash over to this blockchain lorem ipsum generator for some
              Stellar cryptocurrency related placehodler text, before you get
              FOMO.
            </Typography>
            <Typography variant="body1" paragraph>
              Head down to the farm with this animal and vegetal filled
              placeholder text generator, choc full of all your barnyard
              favorites strung end-to-end.
            </Typography>
            <Typography variant="body1" paragraph>
              Pitched as lorem ipsum for future-of-news nerds, Nieman Lab's
              generator uses “some of the most common catch phrases, buzzwords,
              and bon mots of the future-of-news crowd.”
            </Typography>
            <Typography variant="body1" paragraph>
              Fuel your mockups with argumentative positions and rabid dissent
              using the Trollem Ipsum generator. Select your opinion and get
              pure trolling lorem ipsum.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg container justify="flex-end">
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
