import React from "react";
import { Link } from "react-router-dom";

import DataProvider from "./DataProvider";
import Table from "./Table";

class TestData extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section">
                <p>This is just a test page. You can ignore everything here :)</p>
                <div className="container">
                    <div className="columns">
                        <DataProvider endpoint="api/trip/" render={data => <Table data={data} />} />
                    </div>
                    <p>Hello {this.props.name}</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                    <p id="test">Testing...</p>
                </div>
            </section>
        )
    }
}

export default TestData;
