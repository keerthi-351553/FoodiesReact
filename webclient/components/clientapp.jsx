import React from 'react';
import ReactDOM from 'react-dom';
let ChildComponent = require('./sample/searchRestaurant.jsx');
let ChildComponent1 = require('./sample/restaurantDetails.jsx');
class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            result: []
        };
    }
    getResturantDataFromZomato(cityName, cuisine)
    {
        $.ajax({
            url: 'https://developers.zomato.com/api/v2.1/cities?q=' + cityName,
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader('user-key', '0f2bedeed61248146779ada9c8a8d9fc');
            },
            success: function(data) {
                let cityId = data.location_suggestions[0].id;
                console.log('Successfully got city id from Zomato ' + cityId);
                $.ajax({
                    url: 'https://developers.zomato.com/api/v2.1/search?entity_id=' + cityId + '&entity_type=city& q=' + cuisine + '&count=20',
                    type: 'GET',
                    beforeSend: function(request) {
                        request.setRequestHeader('user-key', '0f2bedeed61248146779ada9c8a8d9fc');
                    },
                    success: function(data) {
                        console.log('Successfully got JSON from Zomato' + data);
                        this.setState({result: data.restaurants})
                    }.bind(this),
                    error: function(err) {
                        console.log('error occurred on AJAX');
                        console.log(err);
                    }.bind(this)
                });
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }
    render() {
        return (
            <div>
                <ChildComponent search = {this.getResturantDataFromZomato.bind(this)}/>
                <ChildComponent1 result = {this.state.result}/>
            </div>
        );
    }
}
ReactDOM.render(
    <MainComponent/>, document.getElementById('mountapp'));
module.exports = MainComponent
