import React from "react";
import { Link } from "react-router-dom";


import MainPanel from "./MainPanel"
import TripDisplay from "./TripDisplay"


//Profile page

//Profile page style CSS
const tyleStyle = {
  position: 'sticky',
  float: 'left',
  width: '300px',
/*  border: 1px solid black;*/
  padding: '0px',
  margin: '10px',
  marginTop: '20px',

  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  textAlign: 'center'
};

const userStyle = {
  position: 'sticky',
  float: 'left',
  width: '350px',
  height: '770px',

  background: '#f0f0f5',
  padding: '12px',
  margin: '20px',

  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  textAlign: 'center'
};
//http://lorempixel.com/500/500/people
var user = {
  basicInfo: {
    name: "Jane Doe",
    gender: "Female",
    birthday: "April 3, 1995",
    location: "Sydney, NSW",
    photo: "http://lorempixel.com/500/500/people",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit quia pariatur est saepe necessitatibus, quibusdam reiciendis ratione voluptate atque in qui provident rem repellat soluta. Blanditiis repellat velit eligendi."
  }
}

//Dummy variables
var trip1= {
  tripInfo: {
    name: "Blue Mountains Trip",
    start: "Thornleigh",
    stops: "6",
    distance: "21km",
    time: "1 hr",
    desc: "This is a trip I did last weekend..."
  }
}

var trip2= {
  tripInfo: {
    name: "Byron Bay Trip",
    start: "Sydney",
    stops: "4",
    distance: "50km",
    time: "3 hrs",
    desc: "Visiting the light house."
  }
}

//Renders profile page
class Profile extends React.Component {
  render() {
    return (
      <div>
        <div id="user-profile" style={userStyle}>
          <MainPanel info={user.basicInfo}/>
        </div>

        <div className="trip-tile" style={tyleStyle}>
          <TripDisplay info={trip1.tripInfo}/>
        </div>
        <div className="trip-tile" style={tyleStyle}>
          <TripDisplay info={trip2.tripInfo}/>
        </div>

      </div>

    )
  }
}

export default Profile;
