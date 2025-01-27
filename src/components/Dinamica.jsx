import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const shuffleOptions = (options) => {
  return options
    .map((option) => ({ ...option, order: Math.random() }))
    .sort((a, b) => a.order - b.order)
    .map(({ order, ...rest }) => rest);
};

const Dinamica = () => {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question: "¿Qué significa ser proactivo?",
      options: [
        { text: "Asumir la responsabilidad de tus acciones", isCorrect: true },
        { text: "Reaccionar impulsivamente", isCorrect: false },
        { text: "Culpar a otros por tus problemas", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "¿Cuál es el segundo hábito de los 7 Hábitos?",
      options: [
        { text: "Sé Proactivo", isCorrect: false },
        { text: "Comienza con un Fin", isCorrect: true },
        { text: "Sinergiza", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "¿Qué significa 'Primero lo Primero'?",
      options: [
        { text: "Gestionar tu tiempo basado en prioridades", isCorrect: true },
        { text: "Enfocarse en tareas urgentes únicamente", isCorrect: false },
        { text: "Evitar cualquier conflicto", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "¿Qué hábito fomenta el trabajo en equipo efectivo?",
      options: [
        { text: "Sinergiza", isCorrect: true },
        { text: "Sé Proactivo", isCorrect: false },
        { text: "Afila la Sierra", isCorrect: false },
      ],
    },
    {
      id: 5,
      question: "¿Qué significa 'Piensa en Ganar-Ganar'?",
      options: [
        { text: "Buscar beneficios para ambas partes", isCorrect: true },
        { text: "Priorizar tus propios objetivos", isCorrect: false },
        { text: "Evitar trabajar con otros", isCorrect: false },
      ],
    },
    {
      id: 6,
      question: "¿Qué hábito implica escuchar primero antes de hablar?",
      options: [
        { text: "Primero Entender, Luego Ser Entendido", isCorrect: true },
        { text: "Piensa en Ganar-Ganar", isCorrect: false },
        { text: "Afila la Sierra", isCorrect: false },
      ],
    },
    {
      id: 7,
      question: "¿Qué implica 'Afilar la Sierra'?",
      options: [
        {
          text: "Cuidar de tu bienestar físico, mental, emocional y espiritual",
          isCorrect: true,
        },
        { text: "Enfocarte solo en tus metas", isCorrect: false },
        { text: "Evitar cualquier descanso", isCorrect: false },
      ],
    },
    {
      id: 8,
      question: "¿Qué hábito implica tener una visión clara del futuro?",
      options: [
        { text: "Comienza con un Fin", isCorrect: true },
        { text: "Sé Proactivo", isCorrect: false },
        { text: "Primero lo Primero", isCorrect: false },
      ],
    },
    {
      id: 9,
      question: "¿Qué dimensión no está incluida en 'Afilar la Sierra'?",
      options: [
        { text: "Económica", isCorrect: true },
        { text: "Física", isCorrect: false },
        { text: "Emocional", isCorrect: false },
      ],
    },
    {
      id: 10,
      question: "¿Cuál es el hábito que fomenta soluciones mutuamente beneficiosas?",
      options: [
        { text: "Piensa en Ganar-Ganar", isCorrect: true },
        { text: "Sinergiza", isCorrect: false },
        { text: "Primero Entender, Luego Ser Entendido", isCorrect: false },
      ],
    },
    {
      id: 11,
      question: "¿Qué hábito fomenta la colaboración creativa?",
      options: [
        { text: "Sinergiza", isCorrect: true },
        { text: "Afila la Sierra", isCorrect: false },
        { text: "Primero lo Primero", isCorrect: false },
      ],
    },
    {
      id: 12,
      question: "¿Qué significa 'Primero Entender, Luego Ser Entendido'?",
      options: [
        {
          text: "Escuchar activamente a los demás antes de expresar tus ideas",
          isCorrect: true,
        },
        { text: "Ser el primero en hablar", isCorrect: false },
        { text: "Evitar conflictos", isCorrect: false },
      ],
    },
    {
      id: 13,
      question: "¿Cuál es el primer hábito de los 7 Hábitos?",
      options: [
        { text: "Sé Proactivo", isCorrect: true },
        { text: "Comienza con un Fin", isCorrect: false },
        { text: "Piensa en Ganar-Ganar", isCorrect: false },
      ],
    },

    // Más preguntas...
  ];

  const passingScore = Math.ceil((questions.length * 70) / 100); // Puntaje aprobatorio (70%)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [shuffledOptions, setShuffledOptions] = useState(
    shuffleOptions(questions[0].options)
  );

  useEffect(() => {
    if (!isAnswered && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft, isAnswered]);

  const getProgressColor = () => {
    if (timeLeft > 10) return "#2ecc71";
    if (timeLeft > 5) return "#f1c40f";
    return "#e74c3c";
  };

  const handleAnswer = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    if (option.isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShuffledOptions(
        shuffleOptions(questions[currentQuestion + 1].options)
      );
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(15);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div
      className="container-fluid p-4"
      style={{
        backgroundColor: "#ffffff",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <style>
        {`
          .fireworks {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
          }
          .firework {
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: #f39c12;
            border-radius: 50%;
            animation: explode 1.5s infinite;
          }
          .firework:nth-child(1) {
            top: 50%;
            left: 50%;
            animation-delay: 0s;
          }
          .firework:nth-child(2) {
            top: 30%;
            left: 40%;
            animation-delay: 0.3s;
          }
          .firework:nth-child(3) {
            top: 60%;
            left: 30%;
            animation-delay: 0.6s;
          }
          @keyframes explode {
            0% {
              transform: scale(0.5);
              opacity: 1;
            }
            100% {
              transform: scale(2.5);
              opacity: 0;
            }
          }
          .next-time {
            font-size: 2rem;
            color: #e74c3c;
            animation: fadeInOut 1.5s infinite;
          }
          @keyframes fadeInOut {
            0%, 100% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
          }
        `}
      </style>
      <h1 className="text-center mb-4 text-primary">Cuestionario Interactivo</h1>
      {!showResults ? (
        <>
          <h3 className="text-dark mb-3">
            Pregunta {currentQuestion + 1}/{questions.length}
          </h3>
          <div
            className="progress mb-3"
            style={{
              width: "100%",
              height: "20px",
              backgroundColor: "#ecf0f1",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(timeLeft / 15) * 100}%`,
                backgroundColor: getProgressColor(),
                height: "100%",
                transition: "width 1s linear, background-color 1s linear",
              }}
            ></div>
          </div>
          <div className="mb-4">
            <h4>{questions[currentQuestion].question}</h4>
          </div>
          <div>
            {shuffledOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  backgroundColor: isAnswered
                    ? option.isCorrect
                      ? "#2ecc71"
                      : selectedOption === option
                        ? "#e74c3c"
                        : "#ecf0f1"
                    : "#3498db",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: isAnswered ? "not-allowed" : "pointer",
                }}
              >
                {option.text}
              </button>
            ))}
          </div>
          {isAnswered && (
            <button
              onClick={handleNextQuestion}
              style={{
                padding: "10px 20px",
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              {currentQuestion < questions.length - 1
                ? "Siguiente Pregunta"
                : "Finalizar Cuestionario"}
            </button>
          )}
        </>
      ) : (
        <div className="text-center">
          {score >= passingScore ? (
            <div className="fireworks">
              <div className="firework"></div>
              <div className="firework"></div>
              <div className="firework"></div>
            </div>
          ) : (
            <div className="next-time">¡Sigue practicando para la próxima vez!</div>
          )}
          <h2>Tu puntuación final es: {score}/{questions.length}</h2>
          <button
            onClick={() => navigate("/menu")}
            style={{
              marginTop: "200px",
              padding: "10px 20px",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Regresar al menú
          </button>
        </div>
      )}
    </div>
  );
};

export default Dinamica;
