import React, { Component } from "react";
import ThumbnailGrid from "../components/ThumbnailGrid";
import { Typography } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div style={{ height: "120px", paddingTop: "30px" }}>
            <Typography variant="h2">Travel Photoblog</Typography>
          </div>
        </header>
        <main className="grid-wrapper">
          <ThumbnailGrid />
        </main>
      </div>
    );
  }
}

export default Home;
