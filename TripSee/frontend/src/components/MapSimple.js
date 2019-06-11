import React from 'react';
import {withScriptjs,withGoogleMap,GoogleMap,Marker,InfoWindow} from "react-google-maps";
import { compose, withStateHandlers, lifecycle, withProps, withHandlers } from "recompose"
  
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
          componentWillReceiveProps(nextProps){
              const currentMarkers = JSON.stringify(this.props.markers);
              const nextMarkers = JSON.stringify(nextProps.markers);
              if(currentMarkers !== nextMarkers){
                this.props.updateMarkers(nextProps.markers);
              }
              if(JSON.stringify(this.props.center) !== JSON.stringify(nextProps.center)){
                  console.log("Map: Center updating!");
                this.props.updateCenter(nextProps.center);
            }
              
          }
      }),
    withScriptjs,
    withGoogleMap
)
    (props =>
        <GoogleMap
            ref={props.onMapMounted}
            defaultZoom={14}
            center={props.newCenter}
            //onClick={props.onMapClick}
            onBoundsChanged={props.onBoundsChanged}
        >
            {(props.newMarkers && props.newMarkers.length > 0)
                && props.newMarkers.map((marker, index) =>
                <Marker 
                    key={index} 
                    position={marker.position}
                    onClick={props.openInfocard}
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