import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Autor = () => {
  const navigate = useNavigate();

  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
    "/images/img9.jpg",
    "/images/img10.jpg",
    "/images/img11.jpg",
    "/images/img12.jpg",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "5vw",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          padding: "5vw",
          maxWidth: "600px",
          width: "90%",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "#007bff" }}>David Mendoza Pérez</h1>
        <h4 style={{ fontSize: "1.2rem", color: "#6c757d" }}>
          Estudiante de la Facultad de Informática
        </h4>

        <div style={{ margin: "20px 0" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
            <FaWhatsapp style={{ marginRight: "10px", color: "#25D366" }} size={24} />
            <span style={{ fontSize: "1rem" }}>442 665 1403</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
            <FaEnvelope style={{ marginRight: "10px", color: "#e74c3c" }} size={24} />
            <span style={{ fontSize: "1rem" }}>david.mendoza.perez74@gmail.com</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
            <FaGithub style={{ marginRight: "10px", color: "#333" }} size={24} />
            <a
              href="https://github.com/David0414"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1rem", textDecoration: "none", color: "#007bff" }}
            >
              Checa mi perfil !
            </a>
          </div>
        </div>
        <h5 style={{ fontSize: "1.2rem", color: "#333", marginTop: "20px" }}>
          "Quiero ser parte de tu proyecto, ¡contáctame!"
        </h5>
      </div>

      {/* Galería de imágenes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          gap: "15px",
          maxWidth: "900px",
          width: "100%",
          marginTop: "20px",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              backgroundColor: "#ffffff",
            }}
          >
            <img
              src={image}
              alt={`Imagen ${index + 1}`}
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Botón de regreso */}
      <button
        onClick={() => navigate("/menu")}
        style={{
          marginTop: "30px",
          padding: "12px 20px",
          fontSize: "1rem",
          backgroundColor: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s ease",
        }}
      >
        Regresar
      </button>
    </div>
  );
};

export default Autor;
