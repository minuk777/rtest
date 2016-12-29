import React from "react"

import Poster from "./Poster"
import MakeRate from "./MakeRate"

class Ratings extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isHidden:true
		};
	}

	handleClick() {	

    		this.setState(prevState => ({
      			isHidden:!prevState.isHidden,
    		}));
    		console.log(this.state.isHidden);
  	}

	render() {
		let wrap_style = {
			backgroundColor:"#222222",
			display:"inline-display",
			margin:"auto",
			padding:5,
			color:"#FAFAFA",
			//maxWidth:1000,
			textAlign:"center"
		};

		return(
			<div style={wrap_style} >
				<Poster onClick={this.handleClick.bind(this)} /><Poster /><Poster />
				 {!this.state.isHidden && <MakeRate />}
				<Poster /><Poster /><Poster />
				<MakeRate />
			</div>
		);
	}
}

export default Ratings;