import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

export default function Websites(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/mobileapps"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img src={backArrow} alt="Back to MobileApps page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Website Development</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Dash over to this blockchain lorem ipsum generator for some
              Stellar cryptocurrency related placehodler text, before you get
              FOMO.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Add some oomph to your mockups with a bit of Bavarian. Featuring
              regular lorem ipsum style Bavarian text, with the option for extra
              oomph in the form of expletives.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/services"
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={forwardArrow} alt="Forward to the services page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                alt="graph with magnifying glass"
                style={{ marginLeft: "2.75em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.paragraphContainer}>
            Shred your next project's filler text by dropping in some skater
            lorem ipsum, letting it read like a scene straight out of the old
            Tony Hawk video games.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
