import React from 'react';
import {Card} from 'semantic-ui-react';
import DisplayFavComponent from './displayFavourite.jsx';
import $ from 'jquery';
class Favourites extends React.Component {
    constructor() {
        super();
        this.state = {
            json: []
        };
    }
    componentWillMount() {
        $.ajax({
            url: '/Restaurant/',
            type: 'GET',
            success: function(data) {
                console.log('Successfully got JSON' + data);
                this.setState({json: data});
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }
    // onchange(){
    //   this.componentWillMount();
    // }
    onchange(id) {
        var arrObj = this.state.json;
        var arr = [];
        for (var obj of arrObj) {
            if (obj._id != id) {
                arr.push(obj);
            }
        }
        this.setState({json: arr});
    }
    update(id,comments,updateButton){
      var arrObj = this.state.json;
      for (var obj of arrObj) {
          if (obj._id == id) {
              obj.comments = comments;
              obj.updateButton = updateButton;
          }
      }
      this.setState({json: arrObj});
    }
    render() {
        return (
            <div>
                <DisplayFavComponent fav='favourites' json={this.state.json} change={this.onchange.bind(this)} update={this.update.bind(this)}/>
            </div>
        );
    }
}
module.exports = Favourites;
