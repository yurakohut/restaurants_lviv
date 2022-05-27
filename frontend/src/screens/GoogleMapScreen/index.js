import React, { memo, useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Circle, Marker } from "google-maps-react";
import { mapConfigs } from "../../configs/mapConfigs";

import "./style.scss";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getMarkersByUser } from "../../actions/markerAction";

const containerStyle = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
};

const MapContainer = props => {
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const { markerList, loading: markerLoader } = useSelector(
    state => state.markerListByUser
  );

  useEffect(() => {
    getCurrentLocation();

    if (!markerList.length) {
      dispatch(getMarkersByUser());
    }
  }, [dispatch, markerList]);

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
      {loading || markerLoader ? (
        <Loader />
      ) : (
        <div className="map-wrapper">
          <Map
            onReady={setMapConfigs}
            google={props.google}
            zoom={17}
            containerStyle={containerStyle}
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
            {markerList.map(marker => (
              <Marker
                key={marker._id}
                name={marker.placeName}
                position={{ lat: marker.latitude, lng: marker.longitude }}
              />
            ))}
          </Map>
        </div>
      )}
    </>
  );
};

export default memo(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
  })(MapContainer)
);
