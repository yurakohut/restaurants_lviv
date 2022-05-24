import {
  MARKER_CREATE_FAIL,
  MARKER_CREATE_REQUEST,
  MARKER_CREATE_SUCCESS
} from "../constants/markerContstants";

export const markerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MARKER_CREATE_REQUEST:
      return { loading: true };
    case MARKER_CREATE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case MARKER_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
