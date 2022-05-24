import React, { useState } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";
import { usePlacesWidget } from "react-google-autocomplete";

const CreateMarkerScreen = () => {
  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
    onPlaceSelected: place => {
      const coords = place.geometry.location;
      setLatitude(coords.lat());
      setLongitude(coords.lng());
      setPlaceName(place.formatted_address);
      setPlaceId(place.place_id);
    },
    options: {
      types: ["establishment"],
      componentRestrictions: { country: "ua" }
    }
  });

  const [placeName, setPlaceName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [placeId, setPlaceId] = useState("");

  const onSubmit = () => {
    console.log({ placeName, latitude, longitude, placeId });
  };
  return (
    <Form className="py-3">
      <FormGroup className="mb-3">
        <FormLabel>Place name</FormLabel>
        <FormControl ref={ref} type="text" placeholder="Enter place name" />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Latitude</FormLabel>
        <FormControl
          type="text"
          placeholder="Enter latitude"
          defaultValue={latitude}
          onChange={e => setLatitude(e.target.value)}
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Longitude</FormLabel>
        <FormControl
          type="text"
          placeholder="Enter longitude"
          defaultValue={longitude}
          onChange={e => setLongitude(e.target.value)}
        />
      </FormGroup>

      <Button variant="primary" type="button" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default CreateMarkerScreen;
