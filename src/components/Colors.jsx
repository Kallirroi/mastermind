import React, {Component} from "react";

import "../styles/Colors.css";

function Colors(props)  {
	
	return ( 
		<div onClick={props.handleColorChoice} className='colors'>
		    <div id="M" className='color' style={{ backgroundColor: '#A64D71'}}></div>
		    <div id="B" className='color' style={{ backgroundColor: '#3A8FFA'}}></div>
		    <div id="Y" className='color' style={{ backgroundColor: '#E8CD4D'}}></div>
		    <div id="G" className='color' style={{ backgroundColor: '#7A9284'}}></div>
		    <div id="P" className='color' style={{ backgroundColor: '#af96cd'}}></div>
		    <div id="O" className='color' style={{ backgroundColor: '#fa9d7e'}}></div>
		</div>
	);
}

export default Colors