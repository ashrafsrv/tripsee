import React from 'react';

import {withScriptjs,withGoogleMap,GoogleMap,Marker} from "react-google-maps";
import { compose, withStateHandlers, lifecycle } from "recompose"
  
const Map = compose(
    withStateHandlers(() => ({
        isMarkerShown: false,
        markerPosition: null,
        isOpen: false,
        newMarkers:[],
        newCenter:{lat: -33.856686, lng: 151.215243},
      }), {
        onMapClick: ({ isMarkerShown }) => (e) => ({
            markerPosition: e.latLng,
            isMarkerShown:true,
            isOpen: false,
        }),
        onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
        }),
        updateCenter: () => (newCenter) => ({
            newCenter: newCenter,
        }),
        updateMarkers: () => (newMarkers) => ({
            newMarkers: newMarkers,
        }),
      }),
      lifecycle({
        componentDidMount() {
            const nextCenter = _.get(this.props.places, '0.position', this.props.newCenter);
            this.props.updateCenter(nextCenter);
        }
            /* const DirectionsService = new google.maps.DirectionsService();
      
            DirectionsService.route({
              origin: new google.maps.LatLng(41.8507300, -87.6512600),
              destination: new google.maps.LatLng(41.8525800, -87.6514100),
              travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                  directions: result,
                });
              } else {
                console.error(`error fetching directions ${result}`);
              }
            });
          } */
      }),
    withScriptjs,
    withGoogleMap
)
    (props =>
        <GoogleMap
            //ref={props.onMapMounted}
            defaultZoom={14}
            center={props.newCenter}
            //defaultCenter={{lat: -33.856686, lng: 151.215243}}
            //defaultCenter={{lat: 41.8507300, lng: -87.6512600}}
            //onClick={props.onMapClick}
            //onBoundsChanged={props.onBoundsChanged}
        >

        
            {(props.places && props.places.length > 0)
                && props.places.map((place, index) =>
                <Marker 
                    key={index} 
                    position={place.geometry.location}
                    //onClick={props.openInfocard}
                />
            )}
            {/* Marker */}
            {/*props.isMarkerShown 
                && <Marker 
                        position={props.markerPosition} 
                        onClick={props.openInfocard}
                        ref={props.onMarkerMounted}
            ></Marker>*/}
        </GoogleMap>
    )

export default Map;