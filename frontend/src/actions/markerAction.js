import axios from "axios";
import {
  MARKER_CREATE_FAIL,
  MARKER_CREATE_REQUEST,
  MARKER_CREATE_SUCCESS
} from "../constants/markerContstants";

export const markerCreate = marker => async (dispatch, getState) => {
  try {
    dispatch({
      type: MARKER_CREATE_REQUEST
    });
    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await axios.post("/api/markers", marker, config);

    dispatch({
      type: MARKER_CREATE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: MARKER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
