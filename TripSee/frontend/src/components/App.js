import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

// Import components here
import TopNav from "./TopNav"
import TripCreator from "./TripCreator"
import Profile from "./Profile"
import SignUp from "./SignUp"
import LogIn from "./LogIn"
import CreatedTrip from "./CreatedTrip"
import TestData from "./TestData"
import TestTripStops from "./TestTripStops"
import Bio from "./Bio"
import SearchTripPage from "./SearchTripPage"
import SearchTripResults from "./SearchTripResults"



class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          user: null,
          loggedIn: false,
      }
  }

  componentWillMount() {
      let endpoint = '/api/user/current/'
      fetch(endpoint)
      .then(response => {
        if(response.status !== 200) {
            console.log("Something went wrong");
            return null;
        }
        return response.json();
      })
      .then(data => {
        if(data) {
          this.setState({user: data, loggedIn: true});
        }
      })
  }

  render() {
    return (
        <div>
          { (this.state.loggedIn)
            && <HashRouter>
              <div>
                <TopNav user={this.state.user}/>
                <div className="content">
                  <Switch>
                    <Route path="/" render={(props) => {return (<TripCreator {...props} user={this.state.user}/>)}} exact />
                    <Route path="/profile" render={(props) => {return (<Profile user={this.state.user}/>)}} />
                    <Route path="/testPage" render={(props) => {return (<TestData name="Jina" user={this.state.user}/>)}} />
                    <Route path="/testPage2" render={(props) => {return (<TestTripStops user={this.state.user}/>)}} />
                    <Route path="/createdTrip/trip/:trip_id" render={(props) => {return (<CreatedTrip {...props} user={this.state.user}/>)}} />
                    <Route path="/signUp" render={(props) => {return (<SignUp />)}} />
                    <Route path="/logIn" render={(props) => {return (<LogIn />)}} />
                    <Route path="/bio" render={(props) => {return (<Bio />)}} />
                    <Route path="/searchTripPage" render={(props) => {return (<SearchTripPage />)}} />
                    <Route path="/searchTripResults" render={(props) => {return (<SearchTripResults />)}} />
                  </Switch>
                </div>
              </div>
            </HashRouter>
          }
        </div>
    );
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
