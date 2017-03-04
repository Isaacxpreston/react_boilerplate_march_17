import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'

import '../fonts/open_sans.css'
import styles from '../styles/mainwrapper_styles'

import Component from './component'

const Main = React.createClass({

	render() {
		return (
			<div style={styles.wrapper}>
				<Component>
					Hello world
				</Component>
			</div>
		)
	}
})

function mapStatetoProps (state=null) {
	return {
		simpleReducer: state.simpleReducer,
	}
}

const MainWrapper = connect(mapStatetoProps)(Main);

export default MainWrapper;