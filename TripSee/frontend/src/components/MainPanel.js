import React from "react";
import { Link } from "react-router-dom";

import Avatar from "./Avatar"

//Mainly displays profile with image and words
class MainPanel extends React.Component {
  constructor(props) {
    super(props);

    };

  render() {
    var info = this.props.info;
    if (!info) return null;

    return (
     <div>
        <div className="top">

            <Avatar
            image={info.photo}
            width={200}
            height={200}
            />
            <h2>{info.name}</h2>
            <h3>{info.location}</h3>

          <hr />
        </div>

        <div className="bottom" >
          <h4>Biography</h4>
          <p>{info.bio}</p>
        </div>
      </div>
    );
  }
}

export default MainPanel;
