import React from 'react';
import { Button, Input} from 'semantic-ui-react';

class Component1 extends React.Component {
	constructor () {
		super();
	}
	handleClick(){
		{this.props.whenClick(document.getElementById('id').value,document.getElementById('cuisine').value)};
	}
	render () {
		var divStyle = {
	 margin: '20px',
	 paddingLeft:'50px'
 }
		return (
			<div>
				<input type="text" name="t1" id="id" placeholder="Enter location"/>
				<input type="text" name="t2" id="cuisine" placeholder="Enter Cuisine"/>
				<button onClick={this.handleClick.bind(this)}>Search</button>
			{/* <Input type='text' placeholder='Enter CityName' id='ids' autoFocus/>
      <Input type='text' placeholder='Enter Cuisine'  id='cuisine' />
      <Button size='large' color='green' onClick={this.handleClick.bind(this)}>Search</Button> */}
		</div>
		);
	}
}

module.exports = Component1
