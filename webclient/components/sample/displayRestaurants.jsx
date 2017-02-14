import React from 'react';
let ButtonComponent = require('./button.jsx');
import {Card, Icon, Image, Button, Input} from 'semantic-ui-react';
let textBoxStyle = {
    height: '70px'
};
let imgStyle = {
    height: '200px'
};
let textStyle = {
    color: 'green',
    fontSize: '110%'
};
let inputStyle = {
    color: 'black'
};
let cardStyle = {
    height: '150px'
};
class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: '',
            addButton: 'Add To Favourites',
            updateButton: 'Add Comments',
            colorName: 'red',
            deleteButton: 'Delete'
        };
    }
    addRestaurant() {
        $.ajax({
            url: '/Restaurant/add',
            type: 'POST',
            data: {
              'resId':this.props.resId,
                'name': this.props.name,
                'address': this.props.address,
                'cuisines': this.props.cuisines,
                'ratings': this.props.ratings,
                'image': this.props.image
            },
            success: function(data) {
                // console.log(data);
                this.setState({addButton: 'Added To Favourite',colorName:'grey'});
            }.bind(this),
            error: function(err) {
                // console.log('error occurred on AJAX');
                // console.log(err);
            }.bind(this)
        });
    }
    deleteFavourites() {
        let id = this.props.id;
        $.ajax({
            url: `/Restaurant/delete/${id}`,
            type: 'DELETE',
            success: function(data) {

                console.log(data);
                this.props.change(id);
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });

    }
    // change(){
    //
    //   this.props.change;
    // }
    updateFavourites() {
        let comments = this.state.comments;
        let id = this.props.id;
        let updateButton = this.state.updateButton;
        $.ajax({
            url: `/Restaurant/update/${id}`,
            type: 'PATCH',
            data: {
                'comments': comments
            },
            success: function(data) {
                console.log('done');
                this.setState({updateButton: 'Comments Updated', colorName:'yellow'});
                this.update(id,comments);
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
        this.setState({comments:''});
        this.setState({updateButton: ''});
    }

    update(id,comments,updateButton) {
      this.props.update(id,comments,updateButton);
    }

    getComments(e) {
        console.log(e.target.value);
        this.setState({comments: e.target.value});
    }
    render() {
        let fav = this.props.fav;
        let del = "";
        let favourite = this.props.favourite;
        let add = '';
        let textBox = '';
        if (fav === 'fav') {
            add = <ButtonComponent click={this.addRestaurant.bind(this)} size='large' color={this.state.colorName || 'red'} button={this.state.addButton}/>;
        }
        if (favourite === 'favourites') {
            del = (
                <div>
                    <Input fluid type='text' onChange={this.getComments.bind(this)} placeholder={this.props.comments} value={this.state.comments}/>
                    <div className='ui two buttons'>
                        <ButtonComponent click={this.updateFavourites.bind(this)} size='small' color={this.state.updateColor || 'teal'} button={this.state.updateButton}/>
                        <ButtonComponent click={this.deleteFavourites.bind(this)} size='small' color={this.state.deleteColor || 'grey'} button={this.state.deleteButton}/>
                    </div>
                </div>
            )
        }
        return (
            <Card>
                <Image style={imgStyle} src={this.props.image}/>
                <Card.Content style={cardStyle}>
                    <Card.Header>
                        {this.props.name}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            <span style={textStyle}>Address :</span>
                            <span style={inputStyle}>{this.props.address}</span>
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        <span style={textStyle}>Cuisines :</span>
                        <span style={inputStyle}>{this.props.cuisines}</span>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <span style={textStyle}>Ratings :</span>
                        <span style={inputStyle}>{this.props.ratings}/5</span>
                    </a>
                </Card.Content>
                {add}
                {del}
            </Card>
        );
    }
}
module.exports = Index;
