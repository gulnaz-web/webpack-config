import React, { useState } from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Счетчик</h1>
        
        <div style={styles.counterDisplay}>
          <span style={styles.counterValue}>{count}</span>
        </div>

        <div style={styles.buttonGroup}>
          <button 
            style={styles.buttonDecrement} 
            onClick={decrement}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            −
          </button>
          
          <button 
            style={styles.buttonReset} 
            onClick={reset}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Сброс
          </button>
          
          <button 
            style={styles.buttonIncrement} 
            onClick={increment}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  card: {
    background: "white",
    borderRadius: "24px",
    padding: "48px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    minWidth: "320px",
  },
  title: {
    margin: "0 0 32px 0",
    fontSize: "32px",
    color: "#333",
    fontWeight: "700",
  },
  counterDisplay: {
    margin: "32px 0",
    padding: "24px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "16px",
    boxShadow: "0 8px 16px rgba(102, 126, 234, 0.3)",
  },
  counterValue: {
    fontSize: "72px",
    fontWeight: "bold",
    color: "white",
    display: "block",
  },
  buttonGroup: {
    display: "flex",
    gap: "16px",
    marginTop: "32px",
  },
  buttonDecrement: {
    flex: 1,
    padding: "16px 24px",
    fontSize: "32px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    color: "white",
    boxShadow: "0 4px 12px rgba(245, 87, 108, 0.4)",
    transition: "transform 0.2s ease",
  },
  buttonReset: {
    flex: 1,
    padding: "16px 24px",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    color: "#555",
    boxShadow: "0 4px 12px rgba(168, 237, 234, 0.4)",
    transition: "transform 0.2s ease",
  },
  buttonIncrement: {
    flex: 1,
    padding: "16px 24px",
    fontSize: "32px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    color: "white",
    boxShadow: "0 4px 12px rgba(79, 172, 254, 0.4)",
    transition: "transform 0.2s ease",
  },
};

