import React from "react";
import { Link } from "react-router-dom";


//import TripList from "./TripList"
import TripSearch from "./MapSearch"
import StopBubble from "./StopBubble"


class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue : "",
            places: [],
            tripList: [],
            trip_id: null,
        }
    }

    componentWillReceiveProps(nextProps) {
        if(JSON.stringify(this.state.places) !== JSON.stringify(nextProps.places)){
            this.setState({places: nextProps.places});
        }
        if(JSON.stringify(this.state.tripList) !== JSON.stringify(nextProps.tripList)){
            console.log("Got the updated trip list..");
            console.log(nextProps.tripList);
            this.setState({tripList: nextProps.tripList});
        }
        if(this.state.tripName !== nextProps.tripName){
            this.setState({tripName: nextProps.tripName});
        }
        if(this.state.trip_id !== nextProps.trip_id){
            this.setState({trip_id: nextProps.trip_id});
        }
    }
    
    render() {
        return (
            <div className="">
            <div className="trip-header">
                <input 
                    id="input-trip-name"
                    type="text" 
                    name="trip-name" 
                    value={this.props.tripName} 
                    onChange={this.props.handleNameChange}
                    placeholder="Enter trip name"
                />
            </div>
            <div className="sidebar-padding">
              <TripSearch
                onSearchBoxMounted={this.props.onSearchBoxMounted}
                onPlacesChanged={this.props.onPlacesChanged}
              />
              <div className="trip-list">
              {this.state.tripList.map(({ place_id, name })=>
                  <StopBubble key={place_id} name={name}/>
              )}
              </div>

              {/* <Link to={`/createdTrip/trip/${this.state.trip_id}`}> */}
                <button onClick={this.props.addTrip} className='btn btn-create-trip'>Make trip</button>
              {/* </Link> */}

              {/* <ol>
                {this.state.places.map(({ place_id, formatted_address, geometry: { location } }) =>
                    <li key={place_id}>
                    {formatted_address}
                    {" at "}
                    ({location.lat()}, {location.lng()})
                    </li>
                )}
                </ol>
              <TripList/> */}
              </div>
            </div>
        )
    }
}

export default Template;