import React from 'react';
var ButtonComponent = require('./button.jsx');
import { Card, Icon, Image, Button } from 'semantic-ui-react';
var textBoxStyle = {
    height: '70px'
}
var imgStyle = {
    height: '200px'
}
var textStyle = {
    color: 'green',
    fontSize: '110%'
}
var inputStyle = {
    color: 'black'
}

class Cards extends React.Component {
    constructor() {
        super();
    }
    whenClick(){
    $.ajax({
        type:'POST',
           url:"/restaurant/add",
        data:{
          "restaurantName":this.props.restaurantName,
          "address":this.props.address,
          "cuisines":this.props.cuisines,
          "ratings":this.props.ratings,
          "image":this.props.image
        },
       success: function(data)
       {alert(data);
         console.log('Successfully Inserted'+data);
       }.bind(this)
      });
    }
    render() {
        return (
            <Card>
                <Image style={imgStyle} src={this.props.img}/>
                <Card.Content>
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
                <ButtonComponent click={this.whenClick.bind(this)} size='large' name='Add To Favourities' color='red' />
            </Card>
        );
    }
}

module.exports = Cards;
