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

import CallToAction from "./UI/CallToAction";

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
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
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
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "15em" }}
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
        <Grid item className={classes.paragraphContainer}>
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Shred your next project's filler text by dropping in some skater
            lorem ipsum, letting it read like a scene straight out of the old
            Tony Hawk video games.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        justify="flex-end"
        style={{ marginBottom: "15em", marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Ecommerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt="world outline made of dollar signs" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            If you're an Arrested Development fan than this lorem ipsum
            generator is for you. Make your project stand out with ramblings big
            and small from Michael Bluth.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            Favor the more eloquent presidential days of yesteryear? Give Obama
            Ipsum a whirl and get some engaging lorem ipsum text that wasn't
            first seen on Twitter.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Want to generate lorem ipsum from nonsensical Web 2.0 startup names?
            Relive the glory days where everything was rounded and covered in a
            bright, gradated sheen.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        justify="flex-end"
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Search Engine Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="website standing on winner's podium" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            Ahoy matey, yar lorem ipsum text is awash with brigands, bilge and
            more. Get swashbuckling with this trendy looking pirate placeholder
            text generator.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            Channel your inner astronomer with this Carl Sagan inspired lorem
            ipsum text generator. Discover the cosmos one sentence of paragraph
            at a time.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            Based on the hit TV show Breaking Bad, Heisenberg Ipsum lets you
            choose your favorite character and generates lorem ipsum from their
            movie quotes.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
