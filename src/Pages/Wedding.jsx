import {styled} from 'styled-components';
import { Link } from 'react-router';

const Mains=styled.div`
max-width: 500px;
margin: 50px auto;

border-radius: 12px;
background-color: #fffafa;
text-align: center;
box-shadow: 0 8px 16px rgba(0,0,0,0.1);
font-family: 'Georgia', serif;
`
const Images=styled.img`
width: 100%;
  height: 100%;
  border-radius: 20px;
  `
function Wedding(){
  return (
    <Mains>
      <Images
        src="./Images/wed.jpg"
        alt="Wedding Banner"
        className="wedding-image"
      />
      <h1 className="couple-name"></h1>
    <Link to={'/Gallery1'}><button className="rsvp-button">RSVP Now</button></Link> 
      <p className="invite-text">cordially invite you to celebrate their wedding</p> 
    </Mains>
   
  );
};

export default Wedding;
