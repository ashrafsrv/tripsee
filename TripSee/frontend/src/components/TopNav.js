import React from "react";
import { Link } from "react-router-dom";


class TopNav extends React.Component {
    componentDidMount() {
        console.log("This is top nav:");
        console.log(this.props.user);
    }

    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">TripSee</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link">Trip Creator</Link>
                    {/* <Link to="/editprofile" className="nav-item nav-link">Edit-Profile</Link> */}
                    {/* <Link to="/testPage" className="nav-item nav-link">Test</Link> */}
                    {/* <Link to="/testPage2" className="nav-item nav-link">Test 2</Link> */}
                    {/* <Link to="/createdTrip" className="nav-item nav-link">Created-Trip-Draft</Link> */}
                    <Link to="/profile" className="nav-item nav-link" id="btn-profile">{`${this.props.user.first_name} ${this.props.user.last_name}`}</Link>
                    <a href="auth/logout" className="nav-item nav-link" id="btn-logout">Log out</a>
                    <Link to="/searchTripPage" className="nav-item nav-link" >Search Trip</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default TopNav;
