import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Decalogo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = document.getElementById("bubblesCanvas");
    const ctx = canvas.getContext("2d");
    const bubbles = [];

    const createBubble = () => {
      const size = Math.random() * 30 + 10; // Tamaño más grande (entre 10 y 40px)
      const bubble = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        speedY: Math.random() * -1 - 0.5, // Movimiento hacia arriba
        speedX: Math.random() * 2 - 1, // Movimiento horizontal aleatorio
        opacity: Math.random() * 0.5 + 0.5, // Transparencia
      };
      bubbles.push(bubble);
    };

    const updateBubbles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < bubbles.length; i++) {
        const bubble = bubbles[i];
        bubble.y += bubble.speedY;
        bubble.x += bubble.speedX;

        // Eliminar burbujas fuera del canvas y reemplazarlas con nuevas
        if (
          bubble.y + bubble.size < 0 ||
          bubble.x < 0 ||
          bubble.x > canvas.width
        ) {
          bubbles.splice(i, 1);
          createBubble();
          continue;
        }

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(173, 216, 230, ${bubble.opacity})`; // Color azul claro
        ctx.fill();
        ctx.closePath();
      }
    };

    const animate = () => {
      updateBubbles();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      for (let i = 0; i < bubbles.length; i++) {
        const dx = bubbles[i].x - e.clientX;
        const dy = bubbles[i].y - e.clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) { // Distancia más grande para ahuyentar burbujas
          bubbles[i].x += dx / distance * 50;
          bubbles[i].y += dy / distance * 50;
        }
      }
    };

    // Crear muchas burbujas iniciales
    for (let i = 0; i < 150; i++) {
      createBubble();
    }

    animate();

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Fondo animado con burbujas */}
      <canvas
        id="bubblesCanvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        width={window.innerWidth}
        height={window.innerHeight}
      />

      {/* Imagen del decálogo */}
      <img
        src="/images/decalogo.jpg" // Ruta de tu imagen JPG
        alt="Decálogo"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          objectFit: "contain", // Asegura que la imagen mantenga su proporción
        }}
      />

      {/* Botón de regresar */}
      <button
        onClick={() => navigate("/menu")} // Navega de vuelta al menú
        style={{
          position: "absolute",
          bottom: "20px", // Espaciado desde el borde inferior
          right: "20px", // Espaciado desde el borde derecho
          padding: "10px 20px",
          backgroundColor: "#e74c3c",
          color: "white",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
          zIndex: 2, // Asegura que esté sobre el fondo y la imagen
        }}
      >
        Regresar
      </button>
    </div>
  );
};

export default Decalogo;
