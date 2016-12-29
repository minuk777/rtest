import React from "react"

import Poster from "./Poster"
import MakeRate from "./MakeRate"

class Ratings extends React.Component {
	render() {
		let wrap_style = {
			backgroundColor:"#222222",
			display:"inline-block",
			margin:"0 auto",
			padding:5,
			color:"#FAFAFA",
			width:"100%",
			textAlign:"center"
		};

		return(
			<div style={wrap_style}>
				<Poster /><Poster /><Poster />
				<MakeRate />
				<Poster /><Poster /><Poster />
			</div>
		);
	}
}

export default Ratings;