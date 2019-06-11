import React from 'react';
const _ = require("lodash");
import Map from './DisplayMap'
import InfoCard from './MapInfoCard'

const mapStyles = {
    height: '50%',
    width: '50%',
    position: 'absolute',
};

export default class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /* visibleInfoCard: false,
            center: { lat: -33.856686, lng: 151.215243 },
            markers: [],
            places: [], */
            loaded: false,
            placeholder: "Loading map...",
            rawPlaces: [],
            places:[],
            center:null,
        }
    }

    componentDidMount() {
        let tripStopEndpoint = `/api/tripStop/trip_id/${this.props.trip_id}/`
        fetch(tripStopEndpoint) 
        .then(response => {
            if(response.status !== 200) {
                console.log("Something went wrong");
                this.setState({placeholder: "Something went wrong"});
                return null;
            }
            return response.json();
          })
          .then(data => {
            if(data) {
                console.log("Display map:");
                console.log(data);
                this.setState({rawPlaces: data});
                return data;
            }
          }).then((rawPlaces) => {
              if(rawPlaces) {

                let itemsProcessed = 0;

                let newPlaces = [];
                rawPlaces.map(place=>{
                    let endpoint = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${place.place_id.google_maps_id}&fields=name,formatted_address,geometry&key=AIzaSyBY7QdxmKZHziOZlo-GK5kRJZZIrx9VIxI`
                    fetch(endpoint)
                    .then(res => {
                        if(res.status !== 200){
                            console.log("Something went wrong");
                            console.log(res);
                            return;
                        }
                        return res.json();
                    }).then(gmData => {
                        if(gmData) {
                            console.log("YAY GOOGLE");
                            console.log(gmData.result);
                            newPlaces.push(gmData.result);
                        }

                        return gmData.result;
                    })
                });

                setTimeout(()=> {
                    console.log("Checking all place ids");
                    console.log(newPlaces);
                    this.setState({places: newPlaces, loaded:true});
                    //do what you need here
                }, 1500);

                return newPlaces;
              }
          });

          
    }

    render() {
        return (
            this.state.loaded
            ? <div style={{ height: '100%' }}>
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-UkHliC9w77Hq566rxdIggJCwH-kLr0I&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%`,textAlign: 'center'}}>Loading map...</div>}
                    containerElement={<div style={mapStyles} />}
                    mapElement={<div style={{ height: `100%` }}/>}
                    places={this.state.places}

                    /* onMarkerMounted={this.props.onMarkerMounted}
                    onMapMounted={this.props.onMapMounted}
                    onBoundsChanged={this.props.onBoundsChanged}
                    markers={this.state.markers}
                    center={this.state.center}
                    openInfocard={this.props.openInfocard} */
                />
                {/* <InfoCard 
                    visible={this.state.visibleInfoCard}
                    closeInfocard={this.props.closeInfocard}
                    places={this.state.places}
                    addStop={this.props.addStop}
                /> */}
            </div>
            : <p>{this.state.placeholder}</p>
        )
    }
}
