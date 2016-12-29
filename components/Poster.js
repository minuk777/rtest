import React from "react"

class Poster extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			poster_url : "../img/default-poster.jpg"
		};
	}

	componentDidMount() {
		if(this.props.img_url){
			this.setState({poster_url: this.props.img_url});
		}
	}

	render() {

		let wrap_style = {
			backgroundColor:"#121212",
			display:"inline-block",
			margin:5,
			padding:5,
			color:"#FAFAFA"
		};

		let poster_style = {
			width:100,
			height:150
		}

		return(
			<div style={wrap_style} onClick={this.props.onClick}>
				<div>Title</div>
				<img style={poster_style} src={this.state.poster_url} />
			</div>
		);
	}
}

export default Poster;