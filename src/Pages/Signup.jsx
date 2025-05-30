import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className='reg-container'>
    <div className="form-container">
      <div className="form-heading">
        <h1>Event Registration</h1>
      </div>
      <form className="registration-form">
        
        <input type="text" id="name" name="name" placeholder='Enter your name' required />

        
        <input type="email" id="email" name="email" placeholder='Enter E-Mail'required />

        
        <input type="tel" id="phone" name="phone" placeholder='Enter Your Contact' required />
        <input type="password" id='password' name="password" placeholder='Create Password'/>
        <input type='password' id='cpassword' name='cpassword' placeholder='Confirm password'/>

        <label htmlFor="event">Select Event:</label>
        <select id="event" name="event" required>
          <option value="">--Choose an Event--</option>
          <option value="wedding">Wedding</option>
          <option value="birthday">Birthday</option>
          
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
