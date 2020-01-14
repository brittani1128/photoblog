import React, { Component } from "react";
import "./styles.css";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography
} from "@material-ui/core";

class Thumbnail extends Component {
  render() {
		return (
			<Card variant="outlined">
				<CardActionArea>
					<CardMedia
						image={this.props.imageSrc}
						title="Trip title"
						className="card-image"
					/>
					<CardContent>
						<Typography variant="button">{this.props.tripLabel}</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		);
  }
}

export default Thumbnail;
