
import React from 'react';
import {styled} from 'styled-components'
import { Link } from 'react-router';

const Main=styled.div`
    max-width: 500px;
  margin: 40px auto;
  text-align: center;
  padding: 20px;
  border-radius: 12px;
  background-color: #fff0f5;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const Image=styled.img`
   width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
`

const Parent=styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
function Birthday() {
  return (
    <Parent>
    <Main>
      <Image
        src="./Images/birth.jpg"
        alt="Happy Birthday"
        className="birthday-image"
      />
      
      <h1>Happy Birthday, {name}! 🎉</h1>
      <p>Wishing you a day filled with laughter, joy, and cake!</p>
               
    </Main>
<Link style={{}} to={'/Gallery1'} ><button className="rsvp-button">Details</button></Link>
         </Parent>
  );
};

export default Birthday;
