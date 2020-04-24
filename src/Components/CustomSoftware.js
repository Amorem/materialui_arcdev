import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQUery from "@material-ui/core/useMediaQuery";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import roots from "../assets/root.svg";

import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data";
import automationAnimation from "../animations/automationAnimation/data";
import uxAnimation from "../animations/uxAnimation/data";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));

export default function CustomSoftware(props) {
  const classes = useStyles();
  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row">
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: "1em", marginLeft: "-3.5em" }}
        >
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/services"
            onClick={() => props.setSelectedIndex(0)}
          >
            <img src={backArrow} alt="Back to Services page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </Typography>
            <Typography variant="body1" paragraph>
              From its medieval origins to the digital era, learn everything
              there is to know about the ubiquitous lorem ipsum passage.
            </Typography>
            <Typography variant="body1" paragraph>
              Richard McClintock, a Latin scholar from Hampden-Sydney College,
              is credited with discovering the source behind the ubiquitous
              filler text. In seeing a sample of lorem ipsum, his interest was
              piqued by consectetur—a genuine, albeit rare, Latin word.
              Consulting a Latin dictionary led McClintock to a passage from De
              Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a
              first-century B.C. text from the Roman philosopher Cicero.
            </Typography>
            <Typography variant="body1" paragraph>
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It's not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader, “Its ‘words’ loosely approximate the frequency
              with which letters occur in English, which is why at a glance it
              looks pretty real.”
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/mobileapps"
            onClick={() => props.setSelectedIndex(2)}
          >
            <img
              src={forwardArrow}
              alt="Forward to iOS/Andoid App Development page"
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row" justify="space-between">
        <Grid item container className={classes.itemContainer}>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                The decade that brought us Star Trek and Doctor Who also
                resurrected Cicero—or at least what used to be Cicero—in an
                attempt to make the days before computerized design a little
                less painstaking.
              </Typography>
              <Typography variant="body1" paragraph>
                The French lettering company Letraset manufactured a set of
                dry-transfer sheets which included the lorem ipsum filler text
                in a variety of fonts, sizes, and layouts.
              </Typography>
              <Typography variant="body1" paragraph>
                Aldus Corporation, which later merged with Adobe Systems,
                ushered lorem ipsum into the information age with its desktop
                publishing software Aldus PageMaker.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ minHeight: 250, maxHeight: 275, maxWidth: 275 }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} md>
          <Grid item container direction="column" md>
            <Grid item md>
              <Lottie
                options={scaleOptions}
                style={{ maxHeight: 260, maxWidth: 280 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h4" align="right">
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="right" paragraph>
                And that’s why a 15th century typesetter might have scrambled a
                passage of Cicero; he wanted people to focus on his fonts, to
                imagine their own content on the pages. He wanted people to see,
                and to get them to see he had to keep them from reading.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "20em", marginBottom: "20em" }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={roots}
              alt="tree with roots extending out"
              height="450em"
              width="450"
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" gutterBottom align="center">
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Coming full circle, the internet's remixing of the now infamous
              lorem ipsum passage has officially elevated it to pop culture
              status.
            </Typography>
            <Typography variant="body1" paragraph align="center">
              One word of caution: make sure your client knows that lorem ipsum
              is filler text. You don't want them wondering why you filled their
              website with a foreign language, and you certainly don't want
              anyone prematurely publishing it.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row" justify="space-between">
        <Grid item container className={classes.itemContainer}>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                If you haven't seen Game of Thrones, go watch it right now. If
                you have then you'll totally get why this Hodor themed lorem
                ipsum generator is just brilliant.
              </Typography>
              <Typography variant="body1" paragraph>
                In case you don't read Twitter, the news, or just can't get
                enough of The Apprentice host's legendary oration, try this
                Trump lorem ipsum generator on for size.
              </Typography>
              <Typography variant="body1" paragraph>
                A handcrafted, small-batch, artisinal pour-over version of the
                classic lorem ipsum generator, Hipster Ipsum will give your
                mocks that blue collar touch.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 250 }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} md>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align="right">
                User Experience Design
              </Typography>
            </Grid>
            <Grid item md>
              <Lottie
                options={uxOptions}
                style={{ maxHeight: 310, maxWidth: 155 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1" align="right" paragraph>
                Raise your design from the dead with an army of Zombie Ipsum,
                frightful filler text that just won't die. Try the lorem ipsum
                of the undead if you dare...
              </Typography>
              <Typography variant="body1" align="right" paragraph>
                Like your lorem ipsum extra crispy? Then Bacon Ipsum is the
                placeholder text generator for you. Side of eggs and hashbrowns
                is optional, but recommended.
              </Typography>
              <Typography variant="body1" align="right" paragraph>
                Sugary sweet lorem ipsum? You got it with Cupcake Ipsum, the
                only text generator that includes marshmallows, carrot cake, and
                perhaps even a cherry on top.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
