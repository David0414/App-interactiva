import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import HabitDetail from "./HabitDetail";

const Intro = () => {
  const navigate = useNavigate(); // Inicializa el navegador
  const [selectedHabit, setSelectedHabit] = useState(null);

  const habits = [
    { 
      id: 1, 
      title: "Sé Proactivo", 
      description: "Asume la responsabilidad de tu vida...", 
      backgroundImage: "/images/habit1.jpg" 
    },
    { 
      id: 2, 
      title: "Comienza con un Fin", 
      description: "Define claramente tus objetivos a largo plazo...", 
      backgroundImage: "/images/habit2.jpg" 
    },
    { 
      id: 3, 
      title: "Primero lo Primero", 
      description: "Prioriza tus tareas importantes sobre las urgentes...", 
      backgroundImage: "/images/habit3.jpg" 
    },
    { 
      id: 4, 
      title: "Piensa en Ganar-Ganar", 
      description: "Busca soluciones que beneficien a todas las partes...", 
      backgroundImage: "/images/habit4.jpg" 
    },
    { 
      id: 5, 
      title: "Primero Entender, Luego Ser Entendido", 
      description: "Escucha activamente a los demás...", 
      backgroundImage: "/images/habit5.jpg" 
    },
    { 
      id: 6, 
      title: "Sinergiza", 
      description: "Trabaja en equipo y aprovecha las fortalezas de cada persona...", 
      backgroundImage: "/images/habit6.jpg" 
    },
    { 
      id: 7, 
      title: "Afila la Sierra", 
      description: "Dedica tiempo al autocuidado en cuatro dimensiones...", 
      backgroundImage: "/images/habit7.jpg" 
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/images/bg-exitoso.jpg')", // Imagen de fondo
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      {!selectedHabit ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {habits.map((habit) => (
            <div
              key={habit.id}
              onClick={() => setSelectedHabit(habit)}
              style={{
                width: "100%",
                height: "150px",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                cursor: "pointer",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
              }}
            >
              <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{habit.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <HabitDetail habit={selectedHabit} onBack={() => setSelectedHabit(null)} />
      )}

      {/* Botón de regresar */}
      <button
        onClick={() => navigate("/menu")}
        style={{
          position: "absolute",
          bottom: "100px",
          right: "200px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
          transition: "background-color 0.3s",
        }}
      >
        Regresar
      </button>
    </div>
  );
};

export default Intro;
