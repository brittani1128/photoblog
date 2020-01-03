import React, { Component } from 'react'
import { GridList, GridListTile } from '@material-ui/core'

class PhotoGrid extends Component {
	render() {
		return ( 
			<div className='grid-list-root' style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', overflow:'hidden'}}>
				<GridList cellHeight={300} cols={3}>
					{this.props.images.map(tile => (
						<GridListTile cols={tile.cols}>
							<img src={tile.image} alt={tile.title} />
						</GridListTile>
					))}
				</GridList>
			</div>
		)
	}
}

export default PhotoGrid