import React, { Component } from 'react'
import './styles.css'
import {Card, CardContent, CardMedia, CardActionArea} from '@material-ui/core'

class Thumbnail extends Component {
	render() {
		return (
			<Card variant="outlined">
				<CardActionArea>
					<CardMedia image={this.props.imageSrc} title='Trip title' className='card-image'/>
					<CardContent>
						<label>{this.props.tripLabel}</label>
					</CardContent>
				</CardActionArea>
			</Card>
		)
	}
}

export default Thumbnail