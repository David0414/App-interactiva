import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);

    const handleLogoClick = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1000); // Duración de la animación: 1 segundo
    };

    return (
        <div
            style={{
                position: "relative",
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            {/* Video de fondo */}
            <video autoPlay loop muted style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                <source src="/videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            {/* Contenido principal */}
            <div
                style={{
                    position: "absolute",
                    top: "30%",
                    left: "10%",
                    color: "white",
                    maxWidth: "80%",
                    textAlign: "left",
                }}
            >
                <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "normal" }}>Guía interactiva</h3>
                <h1
                    style={{
                        margin: "10px 0",
                        fontSize: "5vw", // Ajustable para pantallas pequeñas
                        lineHeight: "1.2",
                    }}
                >
                    7 hábitos de la gente altamente efectiva
                </h1>
            </div>

            {/* Botón de entrada */}
            <button
                onClick={() => navigate("/menu")}
                style={{
                    position: "absolute",
                    bottom: "20%",
                    left: "10%",
                    padding: "12px 24px",
                    fontSize: "1.5rem",
                    backgroundColor: "white",
                    color: "black",
                    border: "2px solid black",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                }}
            >
                ENTRAR
            </button>

            {/* Logo con animación */}
            <img
                src="/images/logo.png"
                alt="Logo"
                onClick={handleLogoClick}
                style={{
                    position: "absolute",
                    bottom: "5%",
                    right: "5%",
                    width: "15vw", // Tamaño adaptable
                    height: "auto",
                    cursor: "pointer",
                    transform: animate ? "scale(1.2) rotate(360deg)" : "scale(1)",
                    transition: "transform 0.5s ease-in-out",
                }}
            />
        </div>
    );
};

export default Home;
