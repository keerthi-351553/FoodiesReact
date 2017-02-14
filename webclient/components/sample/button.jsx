import React from 'react';
import {Button, Icon} from 'semantic-ui-react';
class ButtonComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Button onClick={this.props.click} size={this.props.size} color={this.props.color}>
                <Icon name={this.props.name}></Icon>{this.props.button}</Button>
        );
    }
}
module.exports = ButtonComponent;
