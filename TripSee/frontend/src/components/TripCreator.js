import React from "react";
const _ = require("lodash");
import Cookies from "js-cookie";

import MapContainer from "./MapContainer"
import CreatorSidebar from "./TripCreatorSidebar"

class TripCreator extends React.Component {
    constructor(props){
        super(props);
        const refs = {}
        this.state = {
            tripName: null,
            bounds: null,
            center: { lat: -33.856686, lng: 151.215243 },
            places: [],
            markerPosition: null,
            markers:[],
            visibleInfoCard: false,
            tripList:[],
            trip_id: null,
            // MAP
            onMapMounted: ref => {
                refs.map = ref;
            },
            onBoundsChanged: () => {
                console.log("Bounds changing");
                this.setState({
                  bounds: refs.map.getBounds(),
                  center: refs.map.getCenter(),
                });
            },
            // MARKER
            onMarkerMounted: ref => {
                refs.marker = ref;
            },
            // SEARCH BOX
            onSearchBoxMounted: ref => {
                refs.searchBox = ref;
            },
            onPlacesChanged: () => {
                const places = refs.searchBox.getPlaces();
                const bounds = new google.maps.LatLngBounds();

                places.forEach(place => {
                    if (place.geometry.viewport) {
                      bounds.union(place.geometry.viewport)
                    } else {
                      bounds.extend(place.geometry.location)
                    }
                });

                const nextMarkers = places.map(place => ({
                    position: place.geometry.location,
                  }));

                const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
                console.log("Center updating to new place");

                this.setState({
                    places,
                });
                this.setState({
                    center: nextCenter,
                    markers: nextMarkers,
                    visibleInfoCard: true,
                });
            },
        }

        this.openInfo=this.openInfo.bind(this);
        this.closeInfo=this.closeInfo.bind(this);
        this.addStop=this.addStop.bind(this);
        this.addTrip=this.addTrip.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
    }

    openInfo() {
        this.setState({visibleInfoCard: true})
    }

    closeInfo() {
        this.setState({visibleInfoCard: false})
    }

    addStop(place) {
        console.log("Trip creator: trying to add..");
        let newList = this.state.tripList;
        newList.push(place);
        this.setState({tripList: newList});
    }

    addTrip() {
        console.log("Now adding trip to database...");
        let tripEndpoint = "/api/trip/";
        let placeEndpoint = "/api/place/";
        let tripStopEndpoint = "/api/tripStop/simple/";
        let csrftoken = Cookies.get('csrftoken');
        let trip = {
            trip_name: this.state.tripName,
            num_stops: this.state.tripList.length,
            distance: 0,
            duration: 0,
            rating: 0,
            description: "Test trip", //NEED TO UPDATE THIS
            created_by: 1, //NEED TO UPDATE THIS
        };
         let conf = {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            }),
            body: JSON.stringify(trip),
            credentials: 'same-origin',
          }
        
        //--------------------ADD TRIP------------------------//
        let trip_id = null;
        let places_id = [];
        let fetch1 = fetch(tripEndpoint, conf)
        .then( response1 => {
            if(response1.status !== 201) {
                console.log("Something went wrong");
                return null;
            }
            console.log("Trip was created");
            return response1.json();
        })
        .then(res1 => {
            if(res1){
                trip_id = res1.trip_id;
                this.setState({trip_id: trip_id});
                return trip_id;
            }
        });

        //--------------------ADD PLACES------------------------//
        let placeData = this.state.tripList.map(p => ({
            place_name: p.name,
            google_maps_id: p.place_id,
            address: p.formatted_address,
        }));
        console.log(placeData);
        conf.body = JSON.stringify(placeData);
        let fetch2 = fetch(placeEndpoint, conf)
        .then( response2 => {
            if(response2.status !== 201) {
                console.log("Something went wrong");
                return null;
            }
            console.log("Places were aded");
            console.log("Logging res:")
            //console.log(response2);
            /* console.log("Logging blob:")
            console.log(response2.blob()); */
            console.log("Logging json:")
            //console.log(response2.json());
            return response2.json();
        })
        .then(res2 => {
            if(res2){
                places_id = res2.map(place => (place.place_id));
                console.log(places_id);
                return places_id;
            }
        })

        Promise.all([fetch1, fetch2]).then(function(values) {
            let t_id = values[0];
            
            let p_ids = values[1];
            let tripStopData = [];
            //Prepare data
            let count = 1;
            for(let id of p_ids) {
                let entry = {
                    trip_id: t_id,
                    place_id: id,
                    stop_num: count,
                };
                tripStopData.push(entry);
                count = count + 1;
            }
                
            console.log("ALL THE PROMISES FINISHED");
            console.log(tripStopData);
            conf.body = JSON.stringify(tripStopData);
            fetch(tripStopEndpoint, conf)
            .then( response3 => {
                if(response3.status !== 201) {
                    console.log("Something went wrong");
                    return null;
                }
                console.log("TripStops were added");
                return response3.json();
            })
            .then(res3 => {
                console.log(res3);
                let path = `${window.location}createdTrip/trip/${t_id}`
                alert(`Trip successfully created! ${path}`);
                //this.props.history.push(`/createdTrip/trip_id/${t_id}`)
            });
        });
    }

    handleNameChange(event) {
        this.setState({tripName: event.target.value});
    }

    render() {
        return (
            <div className="">
                <div className="creator-sidebar">
                    <CreatorSidebar
                        onSearchBoxMounted={this.state.onSearchBoxMounted}
                        onPlacesChanged={this.state.onPlacesChanged}
                        places={this.state.places}
                        tripList={this.state.tripList}
                        addTrip={this.addTrip}
                        tripName={this.state.tripName}
                        handleNameChange={this.handleNameChange}
                        trip_id={this.state.trip_id}
                    />
                </div>
                <div className="">
                <MapContainer
                    onMarkerMounted={this.state.onMarkerMounted}
                    onMapMounted={this.state.onMapMounted}
                    center={this.state.center}
                    onBoundsChanged={this.state.onBoundsChanged}
                    markers={this.state.markers}
                    visibleInfoCard={this.state.visibleInfoCard}
                    closeInfocard={this.closeInfo}
                    openInfocard={this.openInfo}
                    places={this.state.places}
                    addStop={this.addStop}
                />}
                </div>
            </div>
        )
    }
}

export default TripCreator;
