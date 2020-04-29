import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import history from "../assets/history.svg";

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
    </Grid>
  );
}
