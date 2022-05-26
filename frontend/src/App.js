import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateMarkerScreen from "./screens/CreateMarkerScreen";
import GoogleMap from "./screens/GoogleMapScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <ProtectedRoute path="/profile" component={ProfileScreen} exact />
          <ProtectedRoute path="/create-marker" component={CreateMarkerScreen} exact />
          <ProtectedRoute path="/map" component={GoogleMap} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
