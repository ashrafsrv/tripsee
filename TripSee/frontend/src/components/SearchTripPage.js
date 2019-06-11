import React from "react";
import { Link } from "react-router-dom";
import SearchTripResults from "./SearchTripResults"
// const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");

class SearchTripPage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
       query: "",
       results_formatted: "",
       trips:[],
       authors:[],
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleInputChange(event) {
    this.setState(
      {query: event.target.value},
    () => this.handleData()
    );
  }

    handleSubmit(event) {
      console.log('hi');
      console.log(this.state.query);
    }

    componentDidMount() {
        this.fetchData();
    }


    fetchData() {
      let tripEndpoint = `/api/trip/`

      fetch(tripEndpoint)
      .then(response => {
          if(response.status !== 200){
              console.log("Something went wrong");
              console.log(response);
              return;
          }
          console.log("Success");
          console.log(response);
          return response.json()
      })
      .then(data => {
          this.setState({trips: data});
          console.log(this.state.trips);

      })
    }

    handleData() {
        var results=[];
        var count = 0;
        console.log(this.state.query);
        length = this.state.query.length
        var arr=this.state.trips;
        var auth=this.state.authors;
        console.log(this.state.trips);
        for(var i=0;i<arr.length;i++){
          // console.log("testing:  " + arr[i].substring(0,length));
          var a=this.state.query.toLowerCase();
          var b=arr[i].trip_name.toLowerCase();
          if (a==b.substring(0,length)&& length>0) {
            console.log(arr[count]);




            var author_name = "";
            var author_id = arr[count].created_by;
            console.log("hi: " + author_id);

            let tripEndpoint = `/api/user/${author_id}`
            fetch(tripEndpoint)
            .then(response => {
                if(response.status !== 200){
                    console.log("Author not found");
                    console.log(response);
                    return;
                }
                console.log("Success");
                console.log(response);
                return response.json()
            })
            .then(data => {
                console.log("HIHIHIHASID");
                author_name = data[0].username;
            })

            console.log(author_name);
            results.push(<SearchTripResults key= {count}
              tripName={arr[count].trip_name} tripAuthor={arr[count].created_by} tripDescription={arr[count].description} tripID={arr[count].trip_id}/>);
          }
        count++;

        }
        this.setState({results_formatted:results});
    }

    render() {
        return (
              <div className="">
              <div className="search-trip-bar">
                   <input
                     type="text"
                     className="input"
                     placeholder="Search for..."
                     onChange={this.handleInputChange}
                    />
              </div>
              <div className="search-page">
                {this.state.results_formatted}
              </div>
              </div>
        )
    }
}

export default SearchTripPage;
