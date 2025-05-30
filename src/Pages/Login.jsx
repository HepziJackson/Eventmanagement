import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCardText
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function display() {
    // Simulating login (replace with real login logic)
    const result = await loginInfo({ email, password });
    console.log("*************", result);
    setState(result);

    if (result === "success") {
      navigate('/home');
    } else {
      alert("Login failed!");
    }
  }

  return (
    <MDBContainer fluid className="p-2 my-2">
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol md="6" className="text-center text-md-start mb-5">
          <img src="./Images/loginpicture.jpg" className="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol md="6">
          <h1 className="mb-4" style={{ color: "#d87ce6", textAlign: "center" }}>
            Join the Celebration – Log In Now!
          </h1>

          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            size="lg" 
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            size="lg"
          />

          <div className="text-center mb-4">
            <Link to="/signup">
              <MDBCardText>Create an account?</MDBCardText>
            </Link>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" onClick={display}>
            Login
          </MDBBtn>

          <h3 className="text-center" style={{ color: "green" }}>{state}</h3>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
