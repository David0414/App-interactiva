import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage: "url('/images/menu-background.jpg')", // Imagen de fondo
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        textAlign: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "bold" }}>
        Menú Principal
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px", lineHeight: "1.5" }}>
        Explora los conceptos clave detrás de los 7 Hábitos. Selecciona una
        opción para comenzar.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <button
          onClick={() => navigate("/introduccion")}
          style={{
            padding: "15px",
            fontSize: "18px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          Introducción
        </button>
        <button
          onClick={() => navigate("/dinamica")}
          style={{
            padding: "15px",
            fontSize: "18px",
            backgroundColor: "#2ecc71",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          Dinámica
        </button>
        <button
          onClick={() => navigate("/autor")}
          style={{
            padding: "15px",
            fontSize: "18px",
            backgroundColor: "#e67e22",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          Autor
        </button>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "15px",
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
    </div>
  );
};

export default Menu;
