import React from 'react';
import CardsComponent from './displayRestaurants.jsx';
import {Card} from 'semantic-ui-react';
class DisplayFavComponent extends React.Component {
    constructor() {
        super();
    }

    update(id,comments,updateButton) {
      this.props.update(id, comments,updateButton);
    }

    render() {
        let divStyle = {
            margin: 70
        };
        var x = this.props.change;
        var update = this.update.bind(this);
        alert(x);
        let fav = this.props.fav;
        let JsonArray = this.props.json.map(function(item) {
            if (fav === 'favourites') {
                alert("hello");
                return <CardsComponent name={item.name} id={item._id} image={item.image} address={item.address} cuisines={item.cuisines} ratings={item.ratings} comments={item.comments} favourite='favourites' update={update} change={x}/>
            }
        });
        return (
            <div style={divStyle}>
                <Card.Group>{JsonArray}</Card.Group>
            </div>
        );
    }
}
module.exports = DisplayFavComponent;
