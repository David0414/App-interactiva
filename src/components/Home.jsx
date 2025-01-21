import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ position: "relative", height: "100vh", width: "100vw", overflow: "hidden" }}>
            <video
                style={{ width: "100%", height: "100%", objectFit: "cover", top: 0, left: 0, }}
                autoPlay
                loop
                muted
            >
                <source src="/videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div
                style={{
                    position: "absolute",
                    top: "30%",
                    left: "10%",
                    color: "white",
                }}
            >
                <h3 style={{ margin: 0, fontWeight: "normal" }}>Guía interactiva</h3>
                <h1 style={{ margin: "10px 0", fontSize: "3rem", lineHeight: "1.2" }}>
                    7 hábitos de la gente altamente efectiva
                </h1>
            </div>
            <button
                onClick={() => navigate("/menu")}
                style={{
                    position: "absolute",
                    bottom: "20%",
                    left: "10%",
                    padding: "10px 20px",
                    fontSize: "18px",
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid black",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                ENTRAR
            </button>
        </div>
    );
};

export default Home;
