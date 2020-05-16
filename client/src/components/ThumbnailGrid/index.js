import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Thumbnail from "../Thumbnail";
import asiaElephant from "../../images/asia-elephant.jpeg";
import stonehenge from "../../images/stonehenge.jpeg";
import dublin from "../../images/dublin.jpeg";
import { A } from "hookrouter";
import "./styles.css";

class ThumbnailGrid extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <A href="/collection/seasia-2018" className="hookrouter-A">
              <Thumbnail
                tripLabel={"Southeast Asia 2019"}
                imageSrc={asiaElephant}
              />
            </A>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <A href="/collection/london-paris-2018" className="hookrouter-A">
              <Thumbnail
                tripLabel={"London and Paris 2018"}
                imageSrc={stonehenge}
              />
            </A>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <A href="/collection/scotland-ireland-2019" className="hookrouter-A">
              <Thumbnail
                tripLabel={"Scotland and Ireland 2019"}
                imageSrc={dublin}
              />
            </A>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ThumbnailGrid;
