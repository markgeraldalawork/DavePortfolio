import { useState, useEffect } from "react";

import env1 from "../asset/gallery/env1.jpg";
import env2 from "../asset/gallery/env2.jpg";

export default function LearningEnvi() {
  const [selectedImage, setSelectedImage] = useState(null);

  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f6f8",
      minHeight: "100vh",
      padding: "20px",
    },
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
    },
    heading: {
      color: "#2563eb",
      textAlign: "center",
      marginBottom: "15px",
    },
    paragraph: {
      lineHeight: "1.6",
      marginBottom: "15px",
      textAlign: "justify",
    },

    /* 🖼 gallery */
    gallery: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "20px",
      marginTop: "25px",
    },

    image: {
      width: "100%",
      height: "280px",
      objectFit: "cover",
      borderRadius: "12px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },

    /* 🖼 modal */
    modal: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.85)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999,
      animation: "fadeIn 0.25s ease",
    },

    modalImage: {
      maxWidth: "90%",
      maxHeight: "90%",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
      animation: "zoomIn 0.25s ease",
    },
  };

  const images = [env1, env2];

  // ⌨️ ESC KEY SUPPORT
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Learning Environment</h1>

        <p style={styles.paragraph}>
          This section reflects how I created a positive and supportive classroom environment.
          I ensured that my classroom was organized, respectful, and conducive to learning.
        </p>

        <p style={styles.paragraph}>
          I encouraged participation, maintained discipline, and built a safe space where learners
          felt comfortable expressing their ideas.
        </p>

        {/* 🖼 IMAGE GALLERY */}
        <div style={styles.gallery}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`learning-env-${index}`}
              style={styles.image}
              onClick={() => setSelectedImage(img)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.25)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 15px rgba(0,0,0,0.15)";
              }}
            />
          ))}
        </div>
      </div>

      {/* 🖼 FULLSCREEN MODAL */}
      {selectedImage && (
        <div
          style={styles.modal}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="full-view"
            style={styles.modalImage}
          />
        </div>
      )}

      {/* ✨ animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes zoomIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}