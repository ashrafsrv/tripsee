import React from "react";
import { Link } from "react-router-dom";

import MainPanel from "./MainPanel"


//Styles for components of form for edit profile page
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

const formStyle = {
  marginTop: '20px',
  position: 'absolute',
  width: '700px',
  height: '650px',
  left: '450px',
  background:' #f0f0f5',
  padding: '10px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
};

const inputStyle = {
  margin: '5px'
};

const bioStyle = {
  margin: '5px',
  width: '500px',
  height: '70px',
  textAlign: 'center'

};

//Dummy variable
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

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
      firstname:"",
      lastname:"",
      country:"",
      state:"",
      email:"",

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('Submit changes');

    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });

  }

  render() {
    return (

      <div>
      <div style={formStyle}>
      <form onSubmit={this.handleSubmit}>

      <br />
      <label>
      My Bio
      <input type="text" name='bio' onChange={this.handleChange} style={bioStyle}/>
      </label>

      <br />
      <hr />
      <br />

      <label>
      First Name
      <input type="text" name='firstname' onChange={this.handleChange} style={inputStyle}/>
      </label>

      <label>
      Last Name
      <input type="text" name='lastname' onChange={this.handleChange} style={inputStyle}/>
      </label>

      <br />

      <label>
      Email
      <input type="text" name='email' onChange={this.handleChange} style={inputStyle}/>
      </label>

      <br />
      <hr />
      <br />

      <label>
      Country
      <input type="text" name='country' onChange={this.handleChange} style={inputStyle} />
      </label>

      <label>
      State
      <input type="text" name='state' onChange={this.handleChange} style={inputStyle}/>
      </label>

      <br />
      <hr />
      <br />

      <label>
      New Password
      <input type="text" name='newpassword' onChange={this.handleChange} style={inputStyle}/>
      </label>

      <label>
      Confirmed Password
      <input type="text" name='confirmedpassword' onChange={this.handleChange} style={inputStyle}/>
      </label>

      <br />

      <label>
      Old Password
      <input type="text" old='password' onChange={this.handleChange} style={inputStyle} />
      </label>

      <input type="submit" value="Change password" />
      </form>
      </div>

      <div id="user-profile" style={userStyle}>
        <MainPanel info={user.basicInfo}  />
      </div>

      </div>




    );
  }
}


export default Bio;
