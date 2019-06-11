import React from "react";
import { Link } from "react-router-dom";


//displays trip in profile page

//style for trop part of display
const topStyle = {
  padding: '10px',
  height: '125px',
  paddingTop: '15px',
  paddingBottom: '15px',
  backgroundColor:  '#d5e1df'
};

//Style for bottom part of display
const bottomStyle = {
  height: '125px',
  padding: '10px'
};

class TripDisplay extends React.Component {
  constructor(props) {
    super(props);

    };

  render() {
    var info = this.props.info;
    if (!info) return null;

    return (
     <div>
        <div className="top-trip-tile" style={topStyle}>
            <h3>{info.name}</h3>
            <h4>{info.desc}</h4>
        </div>
        <div className="bottom-trip-tile" style={bottomStyle}>
          <p>{info.start}</p>
          <p>{info.stops} stops</p>
          <p>{info.distance}, {info.time}</p>
        </div>
      </div>
    );
  }
}

export default TripDisplay;
