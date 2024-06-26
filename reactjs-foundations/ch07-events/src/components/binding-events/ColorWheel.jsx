import { Component } from 'react';

class ColorWheel extends Component {
	constructor (props) {
		super(props);
		this.state = {
			currentColor: '#ff0000'
		}

		// this.changeColor = this.changeColor.bind(this);
	}

	// changeColor(e) {
	// 	this.setState({currentColor: e.target.value});
	// }

	// we can also use the arrow function
	changeColor = (e) => {
		this.setState({currentColor: e.target.value});
	}

	render() {
		const wheelStyle = {
			width: "200px",
			height: "200px",
			borderRadius: "50%",
			backgroundColor: this.state.currentColor,
			marginBottom: "20px"
		}
		return (
			<>
				<div style={wheelStyle}></div>
				<input onChange={this.changeColor} value={this.state.currentColor} />
			</>
		);
	}
}

export default ColorWheel;