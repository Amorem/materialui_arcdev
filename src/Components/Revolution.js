import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Lottie from "react-lottie";

import vision from "../assets/vision.svg";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";

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
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

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
        <Typography
          variant="h2"
          style={{ fontFamily: "Pacifico" }}
          align={matchesMD ? "center" : undefined}
        >
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "5em" }}
      >
        <Grid item lg>
          <img
            src={vision}
            alt="moutain through binoculars"
            style={{
              maxWidth: matchesSM ? 300 : "40em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0,
            }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : "right"}
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              Something fishy about this one, we prefer our lorem ipsum grilled
              or lightly seared. One fish, two fish, red fish, blue fish; get a
              dozen or more with Tuna Ipsum.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              Add a bit of New Zealand quirkiness to your mockups with this
              Kiwiana inspired lorem ipsum generator, featuring items and icons
              from the island's history.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              Disrupt your projects with compassion using the Social Good lorem
              ipsum text generator, and make way for all the entrepreneur speak
              you can possibly handle.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              Pitched as lorem ipsum for future-of-news nerds, Nieman Lab's
              generator uses “some of the most common catch phrases, buzzwords,
              and bon mots of the future-of-news crowd.”
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
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
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Add some oomph to your mockups with a bit of Bavarian. Featuring
              regular lorem ipsum style Bavarian text, with the option for extra
              oomph in the form of expletives.
            </Typography>
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
              Head down to the farm with this animal and vegetal filled
              placeholder text generator, choc full of all your barnyard
              favorites strung end-to-end.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Pitched as lorem ipsum for future-of-news nerds, Nieman Lab's
              generator uses “some of the most common catch phrases, buzzwords,
              and bon mots of the future-of-news crowd.”
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Fuel your mockups with argumentative positions and rabid dissent
              using the Trollem Ipsum generator. Select your opinion and get
              pure trolling lorem ipsum.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg container justify={matchesMD ? "center" : "flex-end"}>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justify="center"
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#B3B3B3", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig. Chainsaw foal hay hook, herbs at combine harvester, children
              is mallet. Goat goose hen horse. Pick up truck livestock, pets and
              storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Lamb.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt
              i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd
              ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi.
              Schmankal zwoa Ramasuri Edlweiss.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch
              Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim,
              da gibt’s koa Sünd, etza!
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={consultation}
            alt="handshake"
            width="100%"
            style={{ maxWidth: 700 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#FF7373", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig. Chainsaw foal hay hook, herbs at combine harvester, children
              is mallet. Goat goose hen horse. Pick up truck livestock, pets and
              storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Lamb.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt
              i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd
              ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi.
              Schmankal zwoa Ramasuri Edlweiss.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch
              Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim,
              da gibt’s koa Sünd, etza!
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={mockup}
            alt="basic website design outline"
            width="100%"
            style={{ maxWidth: 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39B54A", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig. Chainsaw foal hay hook, herbs at combine harvester, children
              is mallet. Goat goose hen horse. Pick up truck livestock, pets and
              storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Lamb.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt
              i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd
              ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi.
              Schmankal zwoa Ramasuri Edlweiss.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch
              Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim,
              da gibt’s koa Sünd, etza!
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="magnifying glass" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#A67C52", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig. Chainsaw foal hay hook, herbs at combine harvester, children
              is mallet. Goat goose hen horse. Pick up truck livestock, pets and
              storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Lamb.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt
              i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd
              ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi.
              Schmankal zwoa Ramasuri Edlweiss.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={design}
            alt="paintbrush"
            style={{ maxWidth: 1000 }}
            width="100%"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39B54A", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig. Chainsaw foal hay hook, herbs at combine harvester, children
              is mallet. Goat goose hen horse. Pick up truck livestock, pets and
              storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Lamb.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt
              i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd
              ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi.
              Schmankal zwoa Ramasuri Edlweiss.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch
              Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim,
              da gibt’s koa Sünd, etza!
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="review" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#FBB03B", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig. Chainsaw foal hay hook, herbs at combine harvester, children
              is mallet. Goat goose hen horse. Pick up truck livestock, pets and
              storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Lamb.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt
              i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd
              ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi.
              Schmankal zwoa Ramasuri Edlweiss.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch
              Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim,
              da gibt’s koa Sünd, etza!
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={build}
            alt="building construction site"
            width="100%"
            style={{ maxWidth: matchesMD ? 700 : 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#C1272D", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig. Chainsaw foal hay hook, herbs at combine harvester, children
              is mallet. Goat goose hen horse. Pick up truck livestock, pets and
              storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Lamb.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt
              i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd
              ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi.
              Schmankal zwoa Ramasuri Edlweiss.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch
              Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim,
              da gibt’s koa Sünd, etza!
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={launch}
            alt="rocket"
            style={{ maxWidth: 200 }}
            width="100%"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#8E45CE", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig. Chainsaw foal hay hook, herbs at combine harvester, children
              is mallet. Goat goose hen horse. Pick up truck livestock, pets and
              storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Lamb.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt
              i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd
              ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi.
              Schmankal zwoa Ramasuri Edlweiss.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch
              Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim,
              da gibt’s koa Sünd, etza!
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={maintain}
            alt="wrench tightening bolts"
            style={{ maxWidth: 500 }}
            width="100%"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#29ABE2", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig. Chainsaw foal hay hook, herbs at combine harvester, children
              is mallet. Goat goose hen horse. Pick up truck livestock, pets and
              storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Lamb.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt
              i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd
              ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi.
              Schmankal zwoa Ramasuri Edlweiss.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#FFF", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Wia vo de Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch
              Spotzerl schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim,
              da gibt’s koa Sünd, etza!
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={iterate} alt="falling dominoes" width="100%" />
        </Grid>
      </Grid>
    </Grid>
  );
}
