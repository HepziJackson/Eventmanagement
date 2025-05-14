import React,{useState} from 'react'
import { MDBContainer,MDBCol, MDBRow,MDBBtn,MDBIcon,MDBInput,MDBCheckbox, MDBCardText}from 'mdb-react-ui-kit';
import { Link } from 'react-router';

 function Login() {
  const[state,setstate]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  async function display(){
    var a=await loginInfo({email,password})
    console.log("*************",a);
    setstate(a)
  }
  return (
    <MDBContainer fluid className="p-3 my-5">
      <h1>{state}</h1>

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="./Images/loginpicture.jpg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' onChange={(e)=>setEmail(e.target.value)} size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password'onChange={(e)=>setPassword(e.target.value)} size="lg"/>
<Link to={'/signup'}><MDBCardText>Create an account ?</MDBCardText></Link>

          <MDBBtn className="mb-4 w-100" size="lg" onclick={display}>Login</MDBBtn>

       

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;
 


