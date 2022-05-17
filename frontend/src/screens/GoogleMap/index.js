import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Circle, Marker } from "google-maps-react";
import { mapConfigs } from "../../configs/mapConfigs";

import "./style.scss";
import Loader from "../../components/Loader";

const mapStyles = {
  width: "100%",
  height: "100%"
};

const MapContainer = props => {
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentLocation();
  }, [loading]);

  const getCurrentLocation = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude: lat, longitude: lng } = position.coords;
        setCoords({ lat, lng });
        setLoading(false);
      },

      err => console.error(err)
    );
  };

  const setMapConfigs = (_, map) => {
    map.setOptions({
      styles: mapConfigs
    });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="map-wrapper">
          <Map
            onReady={setMapConfigs}
            google={props.google}
            zoom={17}
            style={mapStyles}
            initialCenter={{
              lat: coords.lat,
              lng: coords.lng
            }}
          >
            <Marker
              name="Current location"
              icon={{
                url: "/images/location.png",
                anchor: new window.google.maps.Point(32, 32),
                scaledSize: new window.google.maps.Size(35, 42)
              }}
            />
            <Circle
              radius={200}
              center={coords}
              strokeColor="transparent"
              strokeOpacity={0}
              strokeWeight={5}
              fillColor="#c0d6eb"
              fillOpacity={0.2}
            />
          </Map>
        </div>
      )}
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
})(MapContainer);
