import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Thumbnail from '../Thumbnail'
import asiaElephant from '../../images/asia-elephant.jpeg'
import stonehenge from '../../images/stonehenge.jpeg'

class ThumbnailGrid extends Component {
	render() {
		return (
			<React.Fragment>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
						<Thumbnail tripLabel={'Southeast Asia 2019'} imageSrc={asiaElephant}/>
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
						<Thumbnail tripLabel={'London and Paris 2018'} imageSrc={stonehenge}/>
					</Grid>          
					<Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
						<Thumbnail tripLabel={'Scotland and Ireland 2019'} imageSrc={asiaElephant}/>
					</Grid>
				</Grid>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
						<Thumbnail tripLabel={'Southeast Asia'} imageSrc={asiaElephant}/>
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
						<Thumbnail tripLabel={'Southeast Asia'} imageSrc={asiaElephant}/>
					</Grid>          
					<Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
						<Thumbnail tripLabel={'Southeast Asia'} imageSrc={asiaElephant}/>
					</Grid>
				</Grid>
		  </React.Fragment>
		)
	}
}

export default ThumbnailGrid