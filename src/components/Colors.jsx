import React, {Component} from "react";

import "../styles/Colors.css";

class Colors extends Component  {
	render() {
		return (
			<div className='colors'>
			    <div className='color' style={{ backgroundColor: '#A64D71'}}></div>
			    <div className='color' style={{ backgroundColor: '#3A8FFA'}}></div>
			    <div className='color' style={{ backgroundColor: '#E8CD4D'}}></div>
			    <div className='color' style={{ backgroundColor: '#7A9284'}}></div>
			    <div className='color' style={{ backgroundColor: '#af96cd'}}></div>
			    <div className='color' style={{ backgroundColor: '#fa9d7e'}}></div>
			</div>
		);
	}
}

export default Colors