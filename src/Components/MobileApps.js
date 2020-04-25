import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import integrationAnimation from "../animations/integrationAnimation/data.json";

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
}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
              to="/software"
              onClick={() => props.setSelectedIndex(1)}
            >
              <img
                src={backArrow}
                alt="Back to Custom Software Development page"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">iOS/Android App Development</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Shred your next project's filler text by dropping in some skater
              lorem ipsum, letting it read like a scene straight out of the old
              Tony Hawk video games.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Pop culturize your filler text with a lorem ipsum generator based
              on TV theme lyrics, featuring shows like Speed Racer, Gilligan's
              Island and the Muppet Show.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Everyone loves some esoteric TV based placeholder text. Generate
              lorem ipsum from popular TV shows like Futurama, Doctor Who,
              Dexter and more.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/websites"
              onClick={() => props.setSelectedIndex(3)}
            >
              <img
                src={forwardArrow}
                alt="Forward to Websites Development page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid item container direction="row" className={classes.rowContainer}>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Choose from meeting speak, client feedback or just the classic
              with Office Ipsum, a filler text generator for those really dull
              projects you just can't stand.
            </Typography>
            <Typography variant="body1" paragraph>
              Want to see if anyone is actually looking at your mockups? Add a
              sprinkling of expletives to your filler text with this swearing
              lorem ipsum generator.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: "20em" }} />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" gutterBottom align="right">
              Simultaneous Plateform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph align="right">
              Leverage this synergistic dummy text generator to capitalize on
              the disruptive nature of corporate buzzword filled lorem ipsum for
              your next agile project.
            </Typography>
            <Typography variant="body1" paragraph align="right">
              Give your lorem ipsum a bit of character with this text generator
              inspired by the great state of Maine, featuring a classic New
              England accent and phrases.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
