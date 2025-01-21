import React from "react";

const HabitDetail = ({ habit, onBack }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${habit.backgroundImage})`, // Fondo dinámico
        backgroundSize: "contain", // Ajusta la imagen para que no se recorte
        backgroundRepeat: "no-repeat", // Evita que la imagen se repita
        backgroundPosition: "center", // Centra la imagen
        textAlign: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>{habit.title}</h1>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.6",
          marginBottom: "40px",
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {habit.description}
      </p>
      <button
        onClick={onBack}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        Regresar
      </button>
    </div>
  );
};

export default HabitDetail;
