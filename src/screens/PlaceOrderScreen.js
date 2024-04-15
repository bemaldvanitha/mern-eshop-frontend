import React, { useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {Button, Col, Row, ListGroup, Image, Card} from "react-bootstrap";

import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrderScreen = () => {
    const navigate = useNavigate();

    const cart = useSelector(state => state.cart);

    useEffect(() => {
        if(!cart.shippingAddress.address){
            navigate('/shipping');
        }else if(!cart.paymentMethod){
            navigate('/payment');
        }
    },[cart, navigate])

    return(
        <>
            <CheckoutSteps step1 step2 step3 step4/>
            <Row>
                <Col md={8}>
                    Column
                </Col>
                <Col md={4}>
                    Column
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrderScreen;