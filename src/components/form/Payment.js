import React from "react";
import { Col, Container, Row } from "reactstrap";
import amex from "../../resources/Images/credit-cards_amex.png";
import masterCard from "../../resources/Images/credit-cards_mastercard.png";
import visa from "../../resources/Images/credit-cards_visa.png";
import paypal from "../../resources/Images/paypal.png";

const Payment = () => {
  return (
    <>
      <Container fluid className="p-0 m-0">
        <div className="row justify-content-center p-0 m-0">
          <CreditCard />
          <Paypal />
        </div>
      </Container>
    </>
  );
};

const CreditCard = () => {
  return (
    <>
      <Col
        xs={11}
        md={8}
        className="p-4"
        style={{ border: "1px solid #9b9b9b" }}
      >
        <Row>
          <Col xs={8}>
            <div>
              <input
                type="radio"
                name="credit-card-paypal"
                id="credit-card-paypal"
              />
              <label htmlFor="credit-card-paypal">
                <h4 className="ml-2">Credit Card</h4>
              </label>
              <p className="text-secondary">
                safe money transfer using your bank account. Visa, Maestro,
                Discover, American Express.
              </p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="d-flex justify-content-center align-items-center">
              <img src={amex} alt="amex" width="50" height="30" />
              <img src={masterCard} alt="masterCard" width="50" height="30" />
              <img src={visa} alt="visa" width="50" height="30" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="mt-3">
            <label htmlFor="card-no" className="text-secondary text-uppercase">
              Card number
            </label>
            <input
              type="text"
              placeholder="0000 0000 0000 0000"
              id="card-no"
              name="card-no"
              className="form-control"
            />
          </Col>
          <Col xs={12} md={6} className="mt-3">
            <label
              htmlFor="card-name"
              className="text-secondary text-uppercase"
            >
              Name ON card
            </label>
            <input
              type="text"
              placeholder="john doe"
              id="card-name"
              name="card-name"
              className="form-control"
            />
          </Col>
          <Col xs={12} md={3} className="mt-3">
            <label
              htmlFor="expire-date"
              className="text-secondary text-uppercase"
            >
              expiry date
            </label>
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              id="expire-date"
              name="expire-date"
              className="form-control"
            />
          </Col>
          <Col xs={12} md={3} className="mt-3">
            <label htmlFor="cvc-no" className="text-secondary text-uppercase">
              CVC no
            </label>
            <input
              type="text"
              placeholder="123"
              id="cvc-no"
              name="cvc-no"
              className="form-control"
            />
          </Col>
        </Row>
      </Col>
    </>
  );
};

const Paypal = () => {
  return (
    <>
      <Col
        xs={11}
        md={8}
        className="mt-3 p-4"
        style={{ border: "1px solid #9b9b9b" }}
      >
        <Row>
          <Col xs={8}>
            <div>
              <input type="radio" name="credit-card-paypal" id="paypal" />
              <label htmlFor="paypal">
                <h4 className="ml-2">PayPal</h4>
              </label>
              <p className="text-secondary">
                You will be redirected to Paypal website to complete your
                purchase securely.
              </p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="d-flex justify-content-center align-items-center">
              <img src={paypal} className="img-fluid" alt="paypal" />
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};
export default Payment;
