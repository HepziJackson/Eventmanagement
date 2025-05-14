import React, { useState } from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,

}
  from 'mdb-react-ui-kit';
import { Link } from 'react-router';

const Signup = () => {
  const [state, setState] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')

  async function display() {


  }


  return (
    <MDBContainer fluid className='bg-dark'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <h1>{state}</h1>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid />
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Registration form</h3>

                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' />
                    </MDBCol>

                  </MDBRow>

                  <MDBRow>

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form4' type='email' />
                  <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='form5' type='text' />
                  <MDBInput wrapperClass='mb-4' label='Contact' size='lg' id='form6' type='text' />
                  <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form6' type='password' />


                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                    <MDBBtn className='ms-2' color='warning' size='lg' onClick={display}>Submit form</MDBBtn>
             
                
                  </div>

                </MDBCardBody>
       <Link to={'/'}><p>I Have An Account ?</p></Link>
              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>

  );
}


export default Signup;






