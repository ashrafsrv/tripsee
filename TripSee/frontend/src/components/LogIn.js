import React from "react";
import { Link } from "react-router-dom";

class LogIn extends React.Component {

    render() {
        return (
            <div className="page-padding">
                <p>Login Here</p>
                <Link to="/" className="nav-item nav-link">Back</Link>

            </div>
        )
    }
}

export default LogIn;
