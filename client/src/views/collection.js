import React, { Component } from "react";
import { Button, Typography, GridList, GridListTile } from "@material-ui/core";
import { A } from "hookrouter";
import "./styles.css";

const tiles = [
  {
    image: "/images/seasia-2018/IMG_8133.jpeg",
    title: "title",
    cols: 1
  },
  {
    image: "/images/seasia-2018/IMG_8136.jpg",
    title: "title",
    cols: 1
  },
  {
    image: "/images/seasia-2018/IMG_8141.jpeg",
    title: "title",
    cols: 1
  },
  {
    image: "/images/seasia-2018/IMG_8211.jpeg",
    title: "title",
    cols: 2
  },
  {
    image: "/images/seasia-2018/IMG_8144.jpeg",
    title: "title",
    cols: 1
  },
  {
    image: "/images/seasia-2018/IMG_8147.jpeg",
    title: "title",
    cols: 2
  },
  {
    image: "/images/seasia-2018/IMG_8182.jpeg",
    title: "title",
    cols: 1
  },
  {
    image: "/images/seasia-2018/IMG_8183.jpeg",
    title: "title",
    cols: 1
  },
  {
    image: "/images/seasia-2018/IMG_8176.jpeg",
    title: "title",
    cols: 2
  },
  {
    image: "/images/seasia-2018/IMG_8188.jpeg",
    title: "title",
    cols: 1
  },
  {
    image: "/images/seasia-2018/IMG_8190.jpeg",
    title: "title",
    cols: 1
  },
  {
    image: "/images/seasia-2018/IMG_8192.jpeg",
    title: "title",
    cols: 1
  },
];

const data = [
  {
    title: "Southeast Asia 2018",
    images: tiles,
    route: "seasia-2018"
  },
  {
    title: "London and Paris 2018",
    images: tiles,
    route: "london-paris-2018"
  },
  {
    title: "Scotland and Ireland 2019",
    images: tiles,
    route: "scotland-ireland-2019"
  }
];

const seasiaImages = []

export default class Collection extends Component {
  state = {
    trip: []
  };

  componentDidMount() {
    //fetch data
    this.setState(
      {
        trip: data.filter(t => {
          return this.props.name === t.route;
        })
      },
      () => console.log(this.state)
    );
  }

  render() {
    const { trip } = this.state;
    return (
      <div>
        <header style={{ height: "200px", paddingTop: "20px" }}>
          <A href="/">
            <Button variant="outlined">{`< Back`}</Button>
          </A>
          <Typography variant="h3" className="trip-title">
            {trip.length ? trip[0].title : "..."}
          </Typography>
        </header>
        {trip.length ? (
          <div
            className="grid-list-root"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              overflow: "hidden"
            }}
          >
            <GridList cellHeight={500} cols={3}>
              {trip[0].images.map((tile, idx) => (
                <GridListTile cols={tile.cols} key={idx}>
                  <img src={tile.image} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        ) : (
          <div>loading</div>
        )}
      </div>
    );
  }
}