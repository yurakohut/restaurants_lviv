import axios from "axios";
import {
  MARKER_BY_USER_FAIL,
  MARKER_BY_USER_REQUEST,
  MARKER_BY_USER_SUCCESS,
  MARKER_CREATE_FAIL,
  MARKER_CREATE_REQUEST,
  MARKER_CREATE_SUCCESS
} from "../constants/markerConstants";

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

export const getMarkersByUser = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MARKER_BY_USER_REQUEST
    });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await axios.get(`/api/markers`, config);

    dispatch({
      type: MARKER_BY_USER_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: MARKER_BY_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
