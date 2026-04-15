export default function Diversity() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f6f8",
      minHeight: "100vh",
      padding: "20px",
    },
    container: {
      maxWidth: "900px",
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
      fontSize: "16px",
    },
    card: {
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Diversity in the Classroom</h1>

        <div style={styles.card}>
          <p style={styles.paragraph}>
            This section shows how I addressed the different needs and abilities of my learners.
            I provided varied activities and adjusted my teaching strategies to suit different learning styles.
          </p>

          <p style={styles.paragraph}>
            I also gave additional support to learners who needed help to ensure that no one was left behind.
            Differentiated instruction was applied to make learning more inclusive and meaningful for all students.
          </p>

          <p style={styles.paragraph}>
            Through careful planning and observation, I ensured that each learner was given equal opportunity
            to participate and succeed in classroom activities.
          </p>
        </div>
      </div>
    </div>
  );
}