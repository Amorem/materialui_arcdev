import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import history from "../assets/history.svg";
import profile from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  avatar: {
    height: "25em",
    width: "25em",
  },
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2">About Us</Typography>
      </Grid>
      <Grid item container justify="center" className={classes.rowContainer}>
        <Typography
          variant="h4"
          className={classes.missionStatement}
          align="center"
        >
          The classic latin passage that just never gets old, enjoy as much (or
          as little) lorem ipsum as you can handle with our easy to use filler
          text generator.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justify="space-around"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We are the new kids on the block
              </Typography>
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
              <Typography variant="body1" paragraph>
                Raise your design from the dead with an army of Zombie Ipsum,
                frightful filler text that just won't die. Try the lorem ipsum
                of the undead if you dare...
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container lg justify="center">
            <img
              src={history}
              alt="quill pen sitting on top of book"
              style={{ maxHeight: "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        className={classes.rowContainer}
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Cedric TOURNIER, Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started when I was 9 years old
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container>
          <Grid item container direction="column" lg>
            <Grid item>
              <img src={yearbook} alt="yearbook" />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from my sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
            <Typography variant="body1" paragraph align="center">
              Explore the far reaches of the galaxy with this space-themed dummy
              text generator, with quotes from TV classics like Star Trek and
              real astronauts themselves.
            </Typography>
            <Typography variant="body1" paragraph align="center">
              A Gary Busey themed lorem ipsum generator to fill your project
              with a never ending stream of “buseyisms,” quotes taken directly
              from the actor's extensive filmography.
            </Typography>
          </Grid>
          <Grid item container direction="column" lg alignItems="flex-end">
            <Grid item>
              <img src={puppy} alt="puppy" />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                My miniature dapple dachshund, sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
