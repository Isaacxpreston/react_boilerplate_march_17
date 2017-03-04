import React from 'react'
import styles from '../styles/component_styles'

const Component = React.createClass({
	render() {
		return (
			<div style={styles.content}>
				{this.props.children}
			</div>
		)
	}
})

export default Component