import React, { Component } from 'react'
import './styles.css'
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@material-ui/core'
import { Link } from '@reach/router'

class Thumbnail extends Component {
	render() {
		return (
			<Link to={`/trip`} className='thumbnail-link'>
				<Card variant="outlined">
					<CardActionArea>
						<CardMedia image={this.props.imageSrc} title='Trip title' className='card-image'/>
						<CardContent>
							<Typography variant='button'>{this.props.tripLabel}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Link>
		)
	}
}

export default Thumbnail