import React from "react";
import {Link } from 'react-router'

const packages = [
  {
    title: "Classic Package",
    price: "$2,500",
    image: "https://via.placeholder.com/300x200?text=Classic+Wedding",
    description: "Perfect for intimate weddings. Includes venue, basic decor, and photographer.",

  },
  {
    title: "Deluxe Package",
    price: "$5,000",
    image: "https://via.placeholder.com/300x200?text=Deluxe+Wedding",
    description: "Includes premium venue, catering for 100 guests, flowers, and photography.",
  },
  {
    title: "Royal Package",
    price: "$9,000",
    image: "",
    description: "Luxury package with everything: venue, decor, planner, entertainment, and more.",
  },
];

function wedding(){
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Our Wedding Packages</h2>
      <div style={styles.grid}>
        {packages.map((pkg, index) => (
          <div key={index} style={styles.card}>
            <img src={pkg.image} alt={pkg.title} style={styles.image} />
            
            <div
  style={{
    backgroundImage: `url("./Images/photorealistic-wedding-venue-with-intricate-decor-ornaments.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px",
    borderRadius: "6px",
    marginBottom: "15px",
  }}
></div>

            <h3 style={styles.cardTitle}>{pkg.title}</h3>
            <p style={styles.price}>{pkg.price}</p>
            <p style={styles.description}>{pkg.description}</p>
            <Link to={'/Gallery1'}>More</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "40px 20px",
    backgroundColor: "#fff0f5",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "30px",
    color: "#d63384",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "300px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    borderRadius: "6px",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "1.4rem",
    color: "#333",
    margin: "10px 0",
  },
  price: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "#ff69b4",
  },
  description: {
    fontSize: "0.95rem",
    color: "#555",
  },
};

export default wedding;
