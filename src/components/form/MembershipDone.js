import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Col } from "reactstrap";

const MembershipDone = () => {
  const [disappear, setDisappear] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      if (!disappear) {
        localStorage.removeItem("formData");
        setDisappear(!disappear);
        dispatch({ type: "next", payload: { nextNo: 2 } });
        history.push("/");
      }
    }, 2000);
  }, [disappear, history, dispatch]);
  return (
    <>
      {!disappear && (
        <>
          <Col
            xs={11}
            sm={9}
            md={5}
            className="d-flex flex-column justify-content-center align-items-center border"
            style={{ height: "300px" }}
          >
            <div>
              <span
                className="font-weight-bolder text-success"
                style={{ fontSize: "2rem", textShadow: "2px 2px 5px green" }}
              >
                &#10004;
              </span>
              <span className="text-success" style={{ fontSize: "1.5rem" }}>
                congratulations!!!
              </span>
            </div>
            <p className="mt-3 text-secondary" style={{ fontSize: "1.3rem" }}>
              You are now a member of Power X gym.
            </p>
          </Col>
          <Col xs={12} className="mt-3">
            <p className="text-primary text-center font-weight-bolder text-uppercase">
              You will be redirected to home page.
            </p>
          </Col>
        </>
      )}
    </>
  );
};

export default MembershipDone;
