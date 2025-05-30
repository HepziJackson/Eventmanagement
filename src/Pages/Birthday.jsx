
import React from "react";
import { Link } from "react-router";
const birthdayPackages = [
  {
    title: "Kids Party Package",
    price: "$300",
    image: "https://via.placeholder.com/300x200?text=Kids+Party",
    description: "Fun-filled party with decorations, cake, games, and a clown entertainer.",
  },
  {
    title: "Teen Bash Package",
    price: "$600",
    image: "https://via.placeholder.com/300x200?text=Teen+Bash",
    description: "DJ party setup, snacks, cake, and a fun photo booth experience.",
  },
  {
    title: "Luxury Adult Package",
    price: "$1200",
    image: "https://via.placeholder.com/300x200?text=Luxury+Party",
    description: "Premium decor, gourmet catering, cocktails, and live entertainment.",
  },
];

function Birthday(){
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Birthday Packages</h2>
      <div style={styles.grid}>
        {birthdayPackages.map((pkg, index) => (
          <div key={index} style={styles.card}>
            <div
              style={{
                ...styles.bgImage,
                backgroundImage: `url(${pkg.image})`,
              }}
            />
            <h3 style={styles.cardTitle}>{pkg.title}</h3>
            <p style={styles.price}>{pkg.price}</p>
            <p style={styles.description}>{pkg.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "40px 20px",
    backgroundColor: "#e0f7fa",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "30px",
    color: "#00796b",
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
  bgImage: {
    width: "100%",
    height: "200px",
    backgroundSize: "cover",
    backgroundPosition: "center",
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
    color: "#009688",
  },
  description: {
    fontSize: "0.95rem",
    color: "#555",
  },
};

export default Birthday;
