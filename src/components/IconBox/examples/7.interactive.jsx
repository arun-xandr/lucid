import React from 'react';
import createClass from 'create-react-class';
import IconBox from '../IconBox';
import ClockIcon from '../../Icon/ClockIcon/ClockIcon';

export default createClass({
	getInitialState() {
		return {
			isSelected: 0,
		};
	},

	handleSelected() {
		this.setState({
			...this.state,
			isSelected: (this.state.isSelected + 1) % 3,
		});
	},

	render() {
		return (
			<IconBox
				Icon={ClockIcon}
				Label="My IconBox"
				isCheckbox={true}
				isIndeterminate={this.state.isSelected === 1}
				isSelected={this.state.isSelected === 0}
				onClick={this.handleSelected}
			/>
		);
	},
});