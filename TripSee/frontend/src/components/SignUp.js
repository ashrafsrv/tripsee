import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {

    render() {
        return (
            <div className="page-padding">
                <p>Sign In Here</p>
                <Link to="/" className="nav-item nav-link">Back</Link>
            </div>

        )
    }
}

export default SignUp;
