import React from "react";
import { Link } from "react-router-dom";

//Displays the image of a profile in profile page

const avatarStyle = {
  borderRadius: '50%',
  overflow: 'hidden',
  display: 'inline-block',
  marginBottom: '15px'
  /*border: 1px solid #000;*/

};


class Avatar extends React.Component {
  constructor(props) {
    super(props);

    };
  render() {
    //get image from props
    var image = this.props.image,
        style = {
          width: this.props.width || 50,
          height: this.props.height || 50
        };

    if (!image) return null;

//Render image
    return (
     <div className="avatar" style={avatarStyle}>
           <img src={this.props.image}  />
      </div>
    );
  }
}

export default Avatar;
