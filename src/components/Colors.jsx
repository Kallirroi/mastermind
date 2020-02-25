import React, {Component} from "react";

import "../styles/Colors.css";

function Colors(props)  {
	const colors = props.colors;
	return ( 
		<div className='colors'>
		{colors.map((color, i) => {     
			return <div onClick={props.handleColorChoice}  key={color} id={color} className={`color ${color}`}></div>
	    })}
		</div>
	);
}

export default Colors