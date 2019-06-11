import React from "react";
import Rating from "./Rating"
//
// import Reviews from "./Reviews"

class ReviewBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewValue : "",
            reviewContents: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit (event) {
        alert('Thanks for reviewing');
        event.preventDefault();
    }

    handleChange (event) {
        this.setState({
            reviewValue: event.target.value
        })
    }


    setDummyValues(){
        this.setState({reviewContents: "CONTENTS"})
    }

    componentDidMount() {
        this.setDummyValues();
    }

    render() {
        return (

            <div className="review-box">

                <div className="write-review">
                  {/*<p className="write-review-header">Write a Review</p>*/}
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      <p className="write-review-header">Write a Review</p>
                      <Rating />
                      <input id="review-bar" type="text" className="review-bar" value={this.state.reviewValue} onChange={this.handleChange} placeholder="Write a review"/>
                    </label>
                    <div align="right">
                    <input className="review-submit" type="submit" value="Submit"/>
                    </div>
                  </form>

                </div>

                <div className="trip-review">
                  <div className="trip-header">
                      <p>Reviews</p>
                  </div>
                  <div className="trip-review-contents">
                      <p>{this.state.reviewContents}</p>
                  </div>
                </div>

            </div>
        )
    }
}


export default ReviewBox;
