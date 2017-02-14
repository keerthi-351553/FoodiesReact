import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react'

class MainComponent extends React.Component {
	constructor () {
		super();
	}
	render () {
		return (
			<div>
        <Button Content="like" icon='heart' label={{ as: 'a', basic: true, content: '2,048' }}
            labelPosition='right' />
			</div>
		);
	}
}
ReactDOM.render(
	<MainComponent />,document.getElementById('sample')
);
