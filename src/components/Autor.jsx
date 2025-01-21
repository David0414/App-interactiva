import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Autor = () => {
  const navigate = useNavigate();

  // Ejemplo de imágenes (coloca las rutas de tus imágenes aquí)
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw", // Ocupa todo el ancho de la ventana
        minHeight: "100vh", // Ocupa al menos el alto de la ventana
        backgroundColor: "#f4f4f4", // Fondo claro
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          padding: "40px",
          maxWidth: "600px",
          width: "90%",
          marginBottom: "30px",
        }}
      >
        <h1 className="mb-4 text-primary">David Mendoza Pérez</h1>
        <h4 className="mb-4 text-secondary">
          Estudiante de la Facultad de Informática
        </h4>
        <div className="mb-4">
          <div className="d-flex align-items-center justify-content-start mb-3">
            <FaWhatsapp className="me-3 text-success" size={24} />
            <span style={{ fontSize: "18px" }}>442 665 1403</span>
          </div>
          <div className="d-flex align-items-center justify-content-start mb-3">
            <FaEnvelope className="me-3 text-danger" size={24} />
            <span style={{ fontSize: "18px" }}>david.mendoza.perez74@gmail.com</span>
          </div>
          <div className="d-flex align-items-center justify-content-start mb-3">
            <FaGithub className="me-3 text-dark" size={24} />
            <a
              href="https://github.com/David0414"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "18px", textDecoration: "none" }}
            >
              Checa mi perfil !
            </a>
          </div>
        </div>
        <h5 className="text-dark mt-4">
          "Quiero ser parte de tu proyecto, ¡contáctame!"
        </h5>
      </div>

      {/* Cuadros con imágenes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 columnas por fila
          gap: "20px",
          maxWidth: "900px", // Tamaño máximo del contenedor
          width: "100%",
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
              textAlign: "center",
            }}
          >
            <img
              src={image}
              alt={`Imagen ${index + 1}`}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                padding: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                backgroundColor: "#f4f4f4",
              }}
            >
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/menu")}
        style={{
          marginTop: "30px",
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
  );
};

export default Autor;
