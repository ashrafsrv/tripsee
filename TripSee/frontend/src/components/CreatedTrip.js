import React from "react";
import { Link } from "react-router-dom";
import DisplayMapContainer from "./DisplayMapContainer"
import TripDescription from "./TripDescription"
import ReviewBox from "./ReviewBox"


class CreatedTrip extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            placeholder: "Loading..."
        }
    }

    setValues(){
        let tripEndpoint = `/api/trip/${this.props.match.params.trip_id}`

        fetch(tripEndpoint)
        .then(response => {
            if(response.status !== 200){
                console.log("Something went wrong");
                console.log(response);
                this.setState({placeholder: "Something went wrong"})
                return;
            }
            console.log("Success");
            console.log(response);
            return response.json()
        })
        .then(data => {
            let trip_name = data[0].trip_name
            let trip_desc = data[0].description
            let trip_rating = data[0].rating
            let user_id = data[0].created_by
            this.setState({tripName: trip_name, tripRating: trip_rating, tripDesc: trip_desc, authorID: user_id})
        })
        .then(() =>{
            let userEndpoint = `api/user/${this.state.authorID}`
            fetch(userEndpoint)
            .then(response => {
                if(response.status !== 200){
                    console.log("Author not found");
                    console.log(response);
                    this.setState({placeholder: "Something went wrong"})
                    return;
                }
                console.log("Success");
                console.log(response);
                return response.json()
            })
            .then(data => {
                let user_name = data[0].username
                this.setState({tripAuthor: user_name, loaded:true});
                console.log(data)
            })
        })


    }

    starValue() {
        //convert tripRating to percentage to dynamically change .star-outer in CSS
        let starPercentage = (this.state.tripRating/5) * 100;
        this.setState({tripPercentage: starPercentage});
    }

    componentDidMount() {
        console.log(this.props.match.params.trip_id);
        this.setValues();
        this.starValue();
    }

    render() {
      return (
        (this.state.loaded) 
          ? <div className="created-trip-page">
                <div className="completed-trip-block">
                <p className="trip-title">{this.state.tripName}</p>
                <p className="author">Created by {this.state.tripAuthor}</p>
                <div className="trip-star-rating-outer">
                <div className="trip-star-rating-inner" style={{width:`${ this.state.tripPercentage }%`}}></div>

                </div>


                <div className="map-padding-1">
                <DisplayMapContainer trip_id={this.props.match.params.trip_id}/>
                </div>
            </div>


            <div className="trip-description">
                <TripDescription desc={this.state.tripDesc}/>
            </div>

            <div className="trip-review-box">
                <ReviewBox/>
            </div>
            </div>
          : <p>{this.state.placeholder}</p>
      );
    }
}

export default CreatedTrip;
