import './Homepage.css'
import Birthday from '../Pages/Birthday'
import Wedding from '../Pages/Wedding'
import {styled} from 'styled-components'

const Main=styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url('./Images/homepage.jpg');
  object-fit: cover;
  background-position: center;
`
function Homepage(){
    return (
      <Main>
      <Birthday/>
      <Wedding/>
      </Main>
       );
  };
export default Homepage;
