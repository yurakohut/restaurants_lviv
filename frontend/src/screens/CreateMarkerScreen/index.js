import React, { useState } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";
import { usePlacesWidget } from "react-google-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { markerCreate } from "../../actions/markerAction";
import FormContainer from "../../components/FormContainer";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const CreateMarkerScreen = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.markerCreate);

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
    const marker = { placeName, latitude, longitude, placeId };
    dispatch(markerCreate(marker));
  };

  return (
    <FormContainer>
      <h2>Create Marker</h2>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
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
    </FormContainer>
  );
};

export default CreateMarkerScreen;
