import React, { useState } from "react";
import { InfoWindow, Marker } from "google-maps-react";

const LocationMarker = () => {
  const [activeMarker, setActiveMarker] = useState(null);
  const [infoWindowStatus, setInfoWindowStatus] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(false);

  const onMarkerClick = (props, marker, e) => {
    console.log({ props, marker, e });
    setActiveMarker(marker);
    setInfoWindowStatus(true);
    setSelectedPlace(props);
  };

  const onInfoWindowClose = () => {
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
  };
  return (
    <>
      <Marker
        // key={index}
        position={{ lat: 49.8402369, lng: 24.0311538 }}
        label={"label"}
        name={"name"}
        onClick={onMarkerClick}
        //icon={{url:logo,scaledSize:new window.google.maps.Size(40,40)}}
      />
      <InfoWindow
        marker={activeMarker}
        onClose={onInfoWindowClose}
        visible={infoWindowStatus}
      >
        <div>
          <h4>{selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </>
  );
};

export default LocationMarker;
