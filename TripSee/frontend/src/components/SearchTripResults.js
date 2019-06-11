import React from "react";
import { Link } from "react-router-dom";

class SearchTripResults extends React.Component {

    constructor(props) {
      super(props);


    };

    render() {
        return (
              <div className="">
                  <div className="search">
                      <div className="search-header">
                      <Link to={`/createdTrip/trip/${this.props.tripID}`} className="nav-item nav-link">{this.props.tripName}</Link>
                      </div>
                      <div className="search-contents">
                          <p>{this.props.tripDescription}</p>
                      </div>
                  </div>
              </div>
        )
    }
}

export default SearchTripResults;
