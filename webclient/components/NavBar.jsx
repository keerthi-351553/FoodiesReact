import React, {Component} from 'react'
import {Input, Menu, Segment, Button} from 'semantic-ui-react'
var {Link} = require('react-router');

class MenuExamplePointing extends Component {
    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    onClick(){

     $.ajax({
         url: '/users/logout',
         type: 'GET',
         success: function(data) {
           if (typeof data.redirect == 'string')
            window.location.replace(window.location.protocol + "//" + window.location.host + data.redirect);
         }.bind(this),
         error: function(err) {
             console.log('error in logout'+err);
         }.bind(this)
     });
   }

    render() {
        const {activeItem} = this.state

        return (
            <div>
                <Menu pointing>
                    <Link to='/'>
                        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                    </Link>
                    <Link to='/favourites'>
                        <Menu.Item name='favourites' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
                    </Link>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button  size='large' color='green' onClick={this.onClick.bind(this)}>Logout</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
module.exports = MenuExamplePointing;
