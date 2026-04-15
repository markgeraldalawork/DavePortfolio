import { useState } from "react";
import { useEffect } from "react";

import photo1 from "../asset/gallery/photo1.jpg";
import photo2 from "../asset/gallery/photo2.jpg";
import photo3 from "../asset/gallery/photo3.jpg";
import photo4 from "../asset/gallery/photo4.jpg";
import photo5 from "../asset/gallery/photo5.jpg";
import photo6 from "../asset/gallery/photo6.jpg";
import photo7 from "../asset/gallery/photo7.jpg";
import photo8 from "../asset/gallery/photo8.jpg";
import photo9 from "../asset/gallery/photo9.jpg";

export default function ContentKnowledge() {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f6f8",
      minHeight: "100vh",
      padding: "20px",
    },
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
    },
    heading: {
      color: "#2563eb",
      textAlign: "center",
      marginBottom: "10px",
    },
    paragraph: {
      lineHeight: "1.6",
      marginBottom: "15px",
      textAlign: "justify",
    },

    /* 💎 Instagram-style grid */
    gallery: {
      columnCount: 3,
      columnGap: "15px",
    },

    imageWrapper: {
      marginBottom: "15px",
      breakInside: "avoid",
    },

    image: {
      width: "100%",
      borderRadius: "12px",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
    },

    /* 🖼 Modal overlay */
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
    },

    modalImage: {
      maxWidth: "90%",
      maxHeight: "90%",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    },
  };

  const images = [
    photo1, photo2, photo3,
    photo4, photo5, photo6,
    photo7, photo8, photo9,
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Content Knowledge and Pedagogy</h1>

        <p style={styles.paragraph}>
          This section highlights my ability to demonstrate mastery of the subject matter
          and apply appropriate teaching strategies.
        </p>

        <p style={styles.paragraph}>
          I used visual aids, demonstrations, and interactive activities to improve learner
          understanding and engagement.
        </p>

        {/* 💎 INSTAGRAM-STYLE GALLERY */}
        <div style={styles.gallery}>
          {images.map((img, index) => (
            <div key={index} style={styles.imageWrapper}>
              <img
                src={img}
                alt={`gallery-${index}`}
                style={styles.image}
                onClick={() => setSelectedImage(img)}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🖼 FULL SCREEN MODAL */}
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
    </div>
  );
}