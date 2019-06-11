import React from "react";
import { Link } from "react-router-dom";

class LogOut extends React.Component {

    render() {
        return (
            <div className="page-padding">
                <p>Log out</p>
                <Link to="/" className="nav-item nav-link">Back</Link>
            </div>
        )
    }
}

export default LogOut;
