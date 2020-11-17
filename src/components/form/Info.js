import React from "react";
import { Row, Col } from "reactstrap";

const Info = ({ register, errors }) => {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={11} md={5} className="mt-3">
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstname"
            ref={register({ required: true, maxLength: 15 })}
          />
          {errors.firstname?.type === "required" && (
            <div className="text-danger">*this is a required field.</div>
          )}
        </Col>
        <Col xs={11} md={5} className="mt-3">
          <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            name="lastname"
            ref={register({ required: true, maxLength: 15 })}
          />
          {errors.lastname?.type === "required" && (
            <div className="text-danger">*this is a required field.</div>
          )}
        </Col>
        <Col xs={11} md={5} className="mt-3">
          <label>Email</label>
          <input
            className="form-control"
            type="text"
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email?.type === "required" && (
            <div className="text-danger">*this is a required field.</div>
          )}
          {errors.email?.type === "pattern" && (
            <div className="text-danger">*you should input an valid.</div>
          )}
        </Col>
        <Col xs={11} md={5} className="mt-3">
          <label>Mobile Number</label>
          <input
            className="form-control"
            type="tel"
            name="phone"
            ref={register({ required: true, minLength: 11, maxLength: 14 })}
          />
          {errors.phone?.type === "required" && (
            <div className="text-danger">*this is a required field.</div>
          )}
          {errors.phone?.type === "minLength" && (
            <div className="text-danger">*your phone no is not valid.</div>
          )}
          {errors.phone?.type === "maxLength" && (
            <div className="text-danger">*your phone no is not valid.</div>
          )}
        </Col>

        <Col xs={11} md={5} className="mt-3">
          <label>Date Of Birth</label>
          <input
            type="date"
            className="form-control"
            name="birthdate"
            ref={register({ required: true, max: new Date("2010-01-01") })}
          />
          {errors.birthdate?.type === "required" && (
            <div className="text-danger">*this field is required.</div>
          )}
          {errors.birthdate?.type === "max" && (
            <div className="text-danger">*you must choose a valid.</div>
          )}
        </Col>
        <Col xs={11} md={5} className="mt-3">
          <label>Gender</label>
          <select
            className="form-control"
            name="gender"
            defaultValue="male"
            ref={register({ required: true })}
          >
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="others">others</option>
          </select>
        </Col>

        <Col xs={11} md={5} className="mt-3">
          <label>Address</label>
          <input
            className="form-control"
            type="text"
            name="address"
            ref={register({ required: true })}
          />
          {errors.address?.type === "required" && (
            <div className="text-danger">*this field is required.</div>
          )}
        </Col>
        <Col xs={11} md={5} className="mt-3">
          <label>Country/Region:</label>
          <input
            className="form-control"
            type="text"
            name="country"
            ref={register({ required: true })}
          />
          {errors.country?.type === "required" && (
            <div className="text-danger">*this field is required.</div>
          )}
        </Col>

        <Col xs={11} md={5} className="mt-3">
          <label>City</label>
          <input
            className="form-control"
            type="text"
            name="city"
            ref={register({ required: true })}
          />
          {errors.city?.type === "required" && (
            <div className="text-danger">*this field is required.</div>
          )}
        </Col>
        <Col xs={11} md={5} className="mt-3">
          <label>Postcode</label>
          <input
            className="form-control"
            type="text"
            name="postcode"
            ref={register({
              required: true,
              pattern: /(^\d{4}$)|(^\d{5}-\d{4}$)/i,
            })}
          />
          {errors.postcode?.type === "required" && (
            <div className="text-danger">*this field is required.</div>
          )}
          {errors.postcode?.type === "pattern" && (
            <div className="text-danger">
              *you must provide a valid postcode.
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Info;
