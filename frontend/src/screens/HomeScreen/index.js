import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Product from "../../components/Product";
import GoogleMap from "../GoogleMap";

const HomeScreen = () => {
  const dispatch = useDispatch();

  // const { loading, error, products } = useSelector(state => state.productList);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
    </>
  );
};

export default HomeScreen;
