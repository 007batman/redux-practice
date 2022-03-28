import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";


const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {

  const [error, setError] = useState(false);

    
  const submitFormData = (e) => {
    e.preventDefault();

     
    if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-5">
            <button className="btn btn-danger disabled rounded mx-2">1</button>--
            <button className="btn btn-success disabled rounded mx-2">2</button>
            <button className="btn btn-primary disabled rounded mx-2">3</button><br></br><br></br>
              <Form.Label>Age</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="number"
                defaultValue={values.age}
                placeholder="Age"
                onChange={handleFormData("age")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="email"
                defaultValue={values.email}
                placeholder="email"
                onChange={handleFormData("email")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;
