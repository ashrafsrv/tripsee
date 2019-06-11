import React from 'react';

import Map from './MapSimple'
import InfoCard from './MapInfoCard'

const mapStyles = {
    height: '85%',
    width: '80%',
    position: 'absolute',
    right: '0px',
};

export default class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleInfoCard: false,
            center: { lat: -33.856686, lng: 151.215243 },
            markers: [],
            places: [],
        }
    }

    componentWillReceiveProps(nextProps) {
        if(JSON.stringify(this.state.center) !== JSON.stringify(nextProps.center)){
            console.log("Map container: Center updating!");
            this.setState({center: nextProps.center});
        }
        if(JSON.stringify(this.state.markers) !== JSON.stringify(nextProps.markers)){
            this.setState({markers: nextProps.markers});
        }
        if(nextProps.visibleInfoCard !== this.state.visibleInfoCard){
            this.setState({visibleInfoCard: nextProps.visibleInfoCard});
        }
        if(JSON.stringify(this.state.places) !== JSON.stringify(nextProps.places)){
            this.setState({places: nextProps.places});
        }
    }

    render() {
        return (
            <div style={{ height: '100%' }}>
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-UkHliC9w77Hq566rxdIggJCwH-kLr0I&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%`,textAlign: 'center'}}>Loading map...</div>}
                    containerElement={<div style={mapStyles} />}
                    mapElement={<div style={{ height: `100%` }}/>}
                    onMarkerMounted={this.props.onMarkerMounted}
                    onMapMounted={this.props.onMapMounted}
                    onBoundsChanged={this.props.onBoundsChanged}
                    markers={this.state.markers}
                    center={this.state.center}
                    openInfocard={this.props.openInfocard}
                />
                <InfoCard 
                    visible={this.state.visibleInfoCard}
                    closeInfocard={this.props.closeInfocard}
                    places={this.state.places}
                    addStop={this.props.addStop}
                />
            </div>
        )
    }
}
