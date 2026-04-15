import certificate from "../asset/certificate.jpg";
export default function Home() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f6f8",
      margin: 0,
      padding: 0,
      textAlign: "center",
    },
    hero: {
      backgroundColor: "#2563eb",
      color: "white",
      padding: "60px 20px",
    },
    section: {
      maxWidth: "800px",
      margin: "40px auto",
      textAlign: "left",
      padding: "0 20px",
    },
    heading: {
      color: "#2563eb",
      marginBottom: "15px",
    },
    paragraph: {
      lineHeight: "1.6",
      marginBottom: "15px",
    },
    card: {
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    },
    photoBox: {
      marginTop: "20px",
      height: "550px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#999",
      fontStyle: "italic",
    },
    footer: {
      marginTop: "40px",
      padding: "20px",
      fontSize: "14px",
      color: "#666",
    },
    list: {
      paddingLeft: "20px",
      marginBottom: "15px",
    },
  };

  return (
    <div style={styles.page}>
      
      {/* HERO */}
      <section style={styles.hero}>
        <h1>My Teaching Internship Portfolio</h1>
        <p>
          A journey of growth, learning, and passion in becoming a future educator.
        </p>
        <h3>Dave Lorence A. Ala (Sir Dave)</h3>
        <p>Bagumbayan Central School</p>
      </section>

      {/* INTRODUCTION */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Introduction</h2>
        <p style={styles.paragraph}>
          This e-portfolio presents my journey as a pre-service teacher during my teaching internship.
          This experience allowed me to apply learning theories, teaching strategies, methods, and
          techniques while developing my own teaching style.
        </p>
        <p style={styles.paragraph}>
          It highlights my experiences, skills, and growth aligned with the Philippine Professional
          Standards for Teachers (PPST). I interacted with diverse learners and developed effective
          teaching strategies in real classroom settings.
        </p>
        <p style={styles.paragraph}>
          This portfolio reflects my learning and my commitment to becoming a competent and dedicated teacher.
        </p>
      </section>

      {/* CERTIFICATE SECTION */}
      <section style={{ ...styles.section, ...styles.card }}>
        <h2 style={styles.heading}>Certificate of Completion</h2>
        <p style={styles.paragraph}>
          This section contains my Certificate of Completion indicating the required
          360 hours of teaching internship.
        </p>

        {/* PHOTO PLACEHOLDER */}
        <div style={styles.photoBox}>
        <img
          src={certificate}
          alt="Certificate of Completion"
          style={{
            width: "100%",
            maxHeight: "570px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        </div>
      </section>

      {/* PROFESSIONAL READINGS */}
      <section style={{ ...styles.section, ...styles.card }}>
        <h2 style={styles.heading}>Professional Readings</h2>
        <p style={styles.paragraph}>
          During my internship, I engaged in various professional readings to enhance my teaching knowledge and skills.
        </p>

        <ul style={styles.list}>
          <li>DepEd Order No. 42, s. 2016 (Daily Lesson Preparation)</li>
          <li>DepEd Order No. 16, s. 2017 (Action Research Guidelines)</li>
          <li>Philippine Professional Standards for Teachers (PPST)</li>
          <li>EPP Grade 4 Most Essential Learning Competencies</li>
          <li>Articles on classroom management, teaching strategies, and learner-centered approaches</li>
        </ul>

        <p style={styles.paragraph}>
          These readings helped me understand the importance of planning, assessment, and continuous professional growth.
        </p>
      </section>

      {/* ACKNOWLEDGEMENT */}
      <section style={{ ...styles.section, ...styles.card }}>
        <h2 style={styles.heading}>Acknowledgement</h2>
        <p style={styles.paragraph}>
          I would like to express my sincere gratitude to my Cooperating Teacher for the guidance,
          support, and encouragement throughout my teaching internship.
        </p>
        <p style={styles.paragraph}>
          Thank you for sharing your knowledge, expertise, and valuable advice.
        </p>
        <p style={styles.paragraph}>
          To my family, thank you for being with me through ups and downs.
        </p>
        <p style={styles.paragraph}>
          I am also thankful to my College Supervisor and the school for their support.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Dave Lorence A. Ala | Teaching Portfolio
      </footer>
    </div>
  );
}