import React, { Component } from 'react'
import { Button, GridList, GridListTile, Typography } from '@material-ui/core'
import {Link} from '@reach/router'
import PhotoGrid from '../components/PhotoGrid'
import './styles.css'
const tiles = [
		{
			image: 'https://via.placeholder.com/150x200',
			title: 'title',
			cols: 1
		},
		{
			image: 'https://via.placeholder.com/150x200',
			title: 'title',
			cols: 1
		},
		{
			image: 'https://via.placeholder.com/150x200',
			title: 'title',
			cols: 1
		},
		{
			image: 'https://via.placeholder.com/100x100',
			title: 'title',
			cols: 2
		},
		{
			image: 'https://via.placeholder.com/300x150',
			title: 'title',
			cols: 1
		},
		{
			image: 'https://via.placeholder.com/150x200',
			title: 'title',
			cols: 2
		},
		{
			image: 'https://via.placeholder.com/150x200',
			title: 'title',
			cols: 1
		},
		{
			image: 'https://via.placeholder.com/200x200',
			title: 'title',
			cols: 1
		},
		{
			image: 'https://via.placeholder.com/150x150',
			title: 'title',
			cols: 2
		}
]
class Trip extends Component {
	render() {
		return ( 
			<div>
				<header style={{height: '200px', paddingTop:'20px'}}>
					<Button primary><Link to='/'>{`<-- Back`}</Link></Button>
					<Typography variant='h2' className='trip-title'>Title</Typography>
				</header>
				<PhotoGrid images={tiles}/>
			</div>
		)
	}
}

export default Trip