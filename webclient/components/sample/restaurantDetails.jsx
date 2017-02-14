import React from 'react';
let Index = require('./displayRestaurants.jsx');
let ButtonComponent = require('./button.jsx');
import {Card, Icon, Image, Button} from 'semantic-ui-react';
class Component2 extends React.Component {
    constructor() {
        super();
    }
    render() {
        let divStyle = {
            margin: 70
        };
        let restaurants = this.props.result.map(function(item) {
            return (<Index resId={item.restaurant.id} image={item.restaurant.featured_image} name={item.restaurant.name} address={item.restaurant.location.address} cuisines={item.restaurant.cuisines} ratings={item.restaurant.user_rating.aggregate_rating} fav='fav'/>);
        });
        return (
            <div style={divStyle}>
                <Card.Group>{restaurants}</Card.Group>
            </div>
        );
    }
}
module.exports = Component2;
