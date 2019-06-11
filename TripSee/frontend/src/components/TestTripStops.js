import React from "react";
import { Link } from "react-router-dom";

import DataProvider from './DataProvider'

class TestTripStops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tripData:null,
            loaded:false,
            placeholder:"Loading...",
        }
    }

    componentDidMount() {
        let endpoint = `/api/tripStop/`

        fetch(endpoint)
        .then( response => {
            if(response.status !== 200) {
                console.log("Something went wrong");
                console.log(response);
                this.setState({placeholder: "Something went wrong"});
                return;
            }
            console.log("Success!");
            return response.json();
        })
        .then(data => {
            console.log(data);
            this.setState({tripData: data, loaded: true});
        });
    }
    
    render() {
        return (
            <div className="column">
                <p>Test stuff...</p>   
                {
                    (this.state.loaded)
                    ? 
                    <table className="table is-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Place id</th>
                            <th>Place Address</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.tripData.map(el => (
                            <tr key={el.id}>
                                <td>{el.stop_num}</td>
                                <td>{el.place_id.place_id}</td>
                                <td>{el.place_id.address}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    : <p>{this.state.placeholder}</p>
                }
            </div>
        )
    }
}

export default TestTripStops;