import React, { useState } from 'react';
import {styled} from 'styled-components'

const Main = styled.div`
  background-image: url('/Images/service.jpg'); 
  background-size:cover;
  background-position:center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const weddingPackage = {
  price: '₹3,50,000',
  food: [
    'Veg ',
    'Non-Veg ',
    'Welcome Drinks'
  ],
  security: {
    guards: 4,
    cctv: true,
  },
  Parking:{

  }
};

function Service() {
  const { price, food, security } = weddingPackage;

  return (
    <Main>
    <div style={styles.container}>
      <h1 style={styles.heading}>Wedding Package Details</h1>
      <br></br>

      <div style={styles.section}>
        <h2>💰 Price</h2>
        <p>{price}</p>
      </div>

      <div style={styles.section}>
        <h2>🍽️ Food Menu</h2>
        <ul>
          {food.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={styles.section}>
        <h2>🛡️ Security</h2>
        <p>Guards: {security.guards}</p>
        <p>CCTV Surveillance: {security.cctv ? 'Yes' : 'No'}</p>
      </div>
      <h2>Parking</h2>
      <p>Available</p>
    </div>
    
</Main>
  );
  
}

const styles = {
  container: {
    width: '500px',
    height:'100vh',
    margin: 'auto',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginLeft:"380px"
  },
  heading: {
    textAlign: 'center',
    color: '#333'
  },
  section: {
    marginBottom: '20px'
  }
};



export default Service;
