import React from "react";
import { Link } from "react-router-dom";

class TripDescription extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          tripDescription: "",
          tripAuthor: "",
      }
  }


  setDummyValues(){
      this.setState({tripDescription: "it is a good trip it is a good trip it is a good trip it is a good trip it is a good trip it is a good trip it is a good trip", tripAuthor: "WALLAH HABIB"})

  }

  componentDidMount() {
      this.setState({
            tripDescription: this.props.desc,
      })
  }


  render() {
      return (
          <div className="">
            <div className="trip-header">
                <p>Description</p>
            </div>
            <div className="trip-description-contents">
                <p>{this.state.tripDescription}</p>
            </div>

            <div className="description-padding">

            </div>
          </div>
      )
  }
}

export default TripDescription;
