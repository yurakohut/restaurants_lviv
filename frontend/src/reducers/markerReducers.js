import {
  MARKER_BY_USER_FAIL,
  MARKER_BY_USER_REQUEST,
  MARKER_BY_USER_SUCCESS,
  MARKER_CREATE_FAIL,
  MARKER_CREATE_REQUEST,
  MARKER_CREATE_SUCCESS
} from "../constants/markerConstants";

export const markerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MARKER_CREATE_REQUEST:
      return { loading: true };
    case MARKER_CREATE_SUCCESS:
      return { loading: false, createdMarker: action.payload };
    case MARKER_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const markerListByUserReducer = (state = { markerList: [] }, action) => {
  switch (action.type) {
    case MARKER_BY_USER_REQUEST:
      return {
        loading: true
      };
    case MARKER_BY_USER_SUCCESS:
      return {
        loading: false,
        markerList: action.payload
      };
    case MARKER_BY_USER_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
