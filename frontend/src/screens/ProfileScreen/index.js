import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";

import { getUserDetails, updateUserProfile } from "../../actions/userActions";

import Message from "../../components/Message";
import Loader from "../../components/Loader";

const ProfileScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const { loading, error, user } = useSelector(state => state.userDetails);
  const { userInfo } = useSelector(state => state.userLogin);
  const { success } = useSelector(state => state.userUpdateProfile);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <FormGroup controlId="name">
            <FormLabel> Name</FormLabel>
            <FormControl
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={e => setName(e.target.value)}
            ></FormControl>
          </FormGroup>

          <FormGroup controlId="email" className="mt-3">
            <FormLabel>Email Address</FormLabel>
            <FormControl
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></FormControl>
          </FormGroup>

          <FormGroup controlId="password" className="mt-3">
            <FormLabel> Password</FormLabel>
            <FormControl
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></FormControl>
          </FormGroup>

          <FormGroup controlId="confirmPassword" className="mt-3">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            ></FormControl>
          </FormGroup>

          <Button type="submit" variant="primary" className="mt-3">
            Update
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
