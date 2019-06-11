import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            places: [],
        };
        this.safeAddStop = this.safeAddStop.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.visible !== this.state.visible){
            this.setState({visible: nextProps.visible});
        }
        if(JSON.stringify(this.state.places) !== JSON.stringify(nextProps.places)){
            console.log("GOT PLACES");
            console.log(nextProps.places);
            this.setState({places: nextProps.places});
        }
    }

    safeAddStop(){
        if(this.state.places.length > 0){
            console.log("TRYING TO ADD TRIP");
            console.log(this.state.places);
            this.props.addStop(this.state.places[0]);
        }
    }

    render() {
        return (
            <ReactCSSTransitionGroup 
                transitionName="info-card"
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}
                >
                { this.state.visible 
                    ? <div className="info-card">
                        {(this.state.places.length > 0) 
                            && <div>
                                    <p><strong>{this.state.places[0].name}</strong></p>
                                    <p>{this.state.places[0].formatted_address}</p>
                                </div>
                        }

                        {/* <p>Position: {this.state.position.toString()}</p> */}
                        <button className="float-right info-close" onClick={this.props.closeInfocard}>Close</button>
                        <button className="btn-add-stop" onClick={this.safeAddStop}>Add to trip</button>
                    </div>
                    : null }
            </ReactCSSTransitionGroup>
        )
    }
}

export default InfoCard;