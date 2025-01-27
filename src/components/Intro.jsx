import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const habits = [
    {
      id: 1,
      title: "Sé Proactivo",
      description:
        "Ser proactivo implica tomar responsabilidad por tu vida y tus acciones, reconociendo que tú tienes el poder de elegir cómo responder a las circunstancias. En lugar de culpar a factores externos, este hábito invita a enfocarse en el 'círculo de influencia', es decir, aquello que podemos controlar o cambiar. Las personas proactivas son conscientes de que su comportamiento es producto de sus decisiones y no de sus condiciones, y trabajan con intención para actuar alineados con sus valores y metas. Este hábito fomenta un enfoque positivo y orientado a soluciones, impulsando la iniciativa personal para moldear el futuro.",
      backgroundImage: "/images/habit1.jpg",
    },
    {
      id: 2,
      title: "Comienza con un Fin",
      description:
        "Este hábito invita a tener claridad sobre tus objetivos y propósito en la vida. Significa imaginar el resultado final antes de comenzar cualquier acción, asegurándote de que cada paso que tomas está alineado con tus valores más profundos y tus metas a largo plazo. Al definir una visión clara de lo que deseas lograr, puedes tomar decisiones más conscientes y evitar distracciones innecesarias. Es un llamado a construir tu vida con intención, visualizando el legado que quieres dejar y trabajando hacia él con determinación.",
      backgroundImage: "/images/habit2.jpg",
    },
    {
      id: 3,
      title: "Primero lo Primero",
      description:
        "Este hábito se enfoca en la gestión del tiempo y las prioridades. Consiste en dedicar tu energía a las actividades que realmente importan, aquellas que contribuyen a tus metas y valores fundamentales, en lugar de perder tiempo en tareas urgentes pero no esenciales. Covey clasifica las actividades en cuatro cuadrantes y enfatiza la importancia de priorizar lo importante y no urgente, como planificar, aprender y cultivar relaciones. Este hábito promueve un enfoque disciplinado para trabajar de manera más efectiva y equilibrada.",
      backgroundImage: "/images/habit3.jpg",
    },
    {
      id: 4,
      title: "Piensa en Ganar-Ganar",
      description:
        "Este hábito fomenta una mentalidad de abundancia y colaboración, donde ambas partes en una relación o acuerdo buscan beneficios mutuos. En lugar de competir o buscar un solo ganador, el enfoque está en crear soluciones que satisfagan a todos. Esto requiere integridad, madurez emocional y un enfoque en construir relaciones de confianza. Pensar en ganar-ganar crea sinergias y fortalece las conexiones, permitiendo que todos avancen juntos hacia sus objetivos.",
      backgroundImage: "/images/habit4.jpg",
    },
    {
      id: 5,
      title: "Primero Entender, Luego Ser Entendido",
      description:
        "La comunicación efectiva comienza con la empatía, escuchando activamente para comprender las perspectivas y emociones de los demás antes de expresar tus propias ideas. Este hábito resalta la importancia de escuchar con la intención de entender, no solo de responder. Una vez que comprendes verdaderamente al otro, puedes comunicarte de manera más clara y efectiva. Este enfoque fortalece las relaciones y fomenta un entorno de confianza y colaboración.",
      backgroundImage: "/images/habit5.jpg",
    },
    {
      id: 6,
      title: "Sinergiza",
      description:
        "La sinergia es el resultado de combinar diferencias y talentos únicos para lograr resultados que son mayores que la suma de las partes. Este hábito celebra la diversidad y la creatividad, invitando a las personas a trabajar juntas de manera efectiva. Al aprovechar las fortalezas individuales y respetar diferentes perspectivas, se pueden encontrar soluciones innovadoras y alcanzar metas más ambiciosas. La sinergia requiere apertura, confianza y una visión compartida.",
      backgroundImage: "/images/habit6.jpg",
    },
    {
      id: 7,
      title: "Afila la Sierra",
      description:
        "Este hábito se centra en la renovación continua de tus capacidades físicas, mentales, emocionales y espirituales. Es un recordatorio de cuidar de ti mismo para mantener un rendimiento óptimo y un equilibrio saludable en la vida. Afilar la sierra implica actividades como el ejercicio, el aprendizaje, la meditación y el cultivo de relaciones significativas. Este proceso constante de renovación te permite enfrentar los desafíos con energía y claridad, asegurando un crecimiento sostenible.",
      backgroundImage: "/images/habit7.jpg",
    },
  ];

  const handleHabitClick = (habit) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedHabit(habit);
      setIsAnimating(false);
    }, 500);
  };

  const handleBack = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedHabit(null);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/images/bg-exitoso.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "80px",
          fontWeight: "bold",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          zIndex: selectedHabit ? "0" : "10",
        }}
      >
        Los 7 hábitos de la gente altamente efectiva
      </h1>

      {!selectedHabit ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            width: "100%",
            maxWidth: "1200px",
            marginTop: "100px",
          }}
        >
          {habits.map((habit) => (
            <div
              key={habit.id}
              onClick={() => handleHabitClick(habit)}
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
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.3)";
              }}
            >
              <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {habit.title}
              </h3>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: "800px",
            maxHeight: "90%",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            zIndex: "20",
            overflow: "hidden",
          }}
        >
          <img
            src={selectedHabit.backgroundImage}
            alt={selectedHabit.title}
            style={{
              width: "100%",
              height: "20%", // Imagen más pequeña para mayor espacio a la descripción
              objectFit: "contain", // Mantener proporciones
            }}
          />
          <div
            style={{
              flex: "1",
              padding: "30px",
              overflowY: "auto",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {selectedHabit.title}
            </h2>
            <p style={{ fontSize: "1rem", marginTop: "10px", lineHeight: "1.5" }}>
              {selectedHabit.description}
            </p>
          </div>
          <button
            onClick={handleBack}
            style={{
              margin: "10px 0",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#e74c3c",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
              alignSelf: "center",
            }}
          >
            Regresar
          </button>
        </div>
      )}

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
