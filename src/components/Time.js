import React from 'react';

class Time extends React.Component{
	state = {
		time: new Date().toLocaleTimeString()
	}

	componentDidMount(){
		this.timeInterval = setInterval(()=>{
			this.tic();
		},1000);
	}

	componentWillUnmount(){
		clearInterval(this.timeInterval);
	}

	tic = () => {
		this.setState({
			time : new Date().toLocaleTimeString()
		});
	}
	render(){
		return (
			<div>
				{this.state.time}
			</div>
		);
	}
}

export default Time;