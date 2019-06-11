import React from "react";
import { Link } from "react-router-dom";

class Rating extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          temp_rating : "",
          rating: 4,
          stars: [],
      }

      this.rate = this.rate.bind(this);
      this.star_over = this.star_over.bind(this);
      this.star_out = this.star_out.bind(this);
  }

  rate(event){
    var value = event.target.getAttribute('value');
    this.setState({
      rating: value,
      temp_rating: value
    });
  };
  star_over(event){
    var value = event.target.getAttribute('value');
    this.state.temp_rating = this.state.rating;
    this.state.rating = value;
    this.setState({
      rating: this.state.rating,
      temp_rating: this.state.temp_rating
    });
  };
  star_out() {
    this.state.rating = this.state.temp_rating;
    this.setState({ rating: this.state.rating });
  };
  render() {
    this.state.stars = [];

    for(var i = 0; i < 5; i++) {
      var klass = 'star-rating__star';

      if (this.state.rating >= i && this.state.rating != null) {
        klass += ' is-selected';
      }
      this.state.stars.push(
        <label
          key={i}
          value={i}
          className={klass}
          onClick={this.rate}
          onMouseOver={this.star_over}
          onMouseOut={this.star_out}>
          ★
        </label>
      );
    }
    //console.log(this.state.stars);

    return (
      <div className="star-rating">
        {this.state.stars}
        {/*<label
          key={6}
          value={6}
          className={klass}
          onClick={this.rate(6)}
          onMouseOver={this.star_over(6)}
          onMouseOut={this.star_out}>
          ★
        </label>
        <label
          key={1}
          value={1}
          className={klass}
          onClick={this.rate = this.rate.bind(this, 1)}
          onMouseOver={this.star_over = this.star_over.bind(this, 1)}
          onMouseOut={this.star_out}>
          ★
        </label>
        <label
          key={2}
          value={2}
          className={klass}
          onClick={this.rate = this.rate.bind(this, 2)}
          onMouseOver={this.star_over = this.star_over.bind(this, 2)}
          onMouseOut={this.star_out}>
          ★
        </label>
        <label
          key={3}
          value={3}
          className={klass}
          onClick={this.rate = this.rate.bind(this, 3)}
          onMouseOver={this.star_over = this.star_over.bind(this, 3)}
          onMouseOut={this.star_out}>
          ★
        </label>
        <label
          key={4}
          value={4}
          className={klass}
          onClick={this.rate = this.rate.bind(this, 4)}
          onMouseOver={this.star_over = this.star_over.bind(this, 4)}
          onMouseOut={this.star_out}>
          ★
        </label>*/}
      </div>
    )
  }
}

export default Rating;
