import React from "react"

class MakeRate extends React.Component {
	
	render() {

		let wrap_style = {
			backgroundColor:"grey",
			width:300,
			margin:"auto",
			padding:5,
			color:"#FAFAFA"
		};

		return(
			<div style={wrap_style}>
				<div>make rate</div>
			</div>
		);
	}
}

export default MakeRate;