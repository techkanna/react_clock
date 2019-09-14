import React from 'react';
import Time from './Time';
class Clock extends React.Component{
	state = {
		date : ''
	}
		getdate = (e) => {
			if(this.state.date !== ''){
				this.setState({
					date : ''
				});
			} else {
				this.setState({
					date : new Date().toDateString()
				});
			}
		} 

	render(){
		return (
			<div className='clock'>
				<div className='icon'>
					<div className='mb2'>
					  <label className="switch">
		          <input onClick={this.getdate}type="checkbox" />
		          <span className="slider round">
		          </span>
		        </label>
		      </div>
					<div className='mb1'>
					  <i className="far fa-calendar-alt fa-3x"></i>
					</div>
				</div>
				<div className='roundclock'>
					<Time />
					<small className='date'>{this.state.date}</small>
				</div>
			</div>
		);
	}
}

export default Clock;