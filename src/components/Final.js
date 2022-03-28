import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import Navbar from "./Navbar";

const Final = ({ values , prevStep}) => {

  
  
  
  const { firstName, lastName, age, email } = values;
  console.log(prevStep)
  const submitFormData = (e) => {
    e.preventDefault();
    
  };
  // const [data, setdata] = useState({
  //   name:""

  // })
  let username = email.split("@");

  localStorage.setItem("name",username[0]);
  let name = localStorage.getItem("name");
  
  
  
  return (
    <>
    <Navbar title="User Regestered" username={name}/>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
        <Form onSubmit={submitFormData}>
        <button className="btn btn-danger disabled rounded mx-2">1</button>--
        <button className="btn btn-danger disabled rounded mx-2">2</button>--
        <button className="btn btn-success  disabled rounded mx-2">3</button><br></br> <br></br>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Age :</strong> {age}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

            </div>
            </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
