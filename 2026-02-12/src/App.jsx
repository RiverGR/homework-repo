import React from "react";
import LanguageProvider from "./contexts/LanguageProvider";
import Header from "./components/Header";
import Content from "./components/Content";

export default function App() {
  return (
    <LanguageProvider>
      <div style={styles.container}>
        <Header />
        <Content />
      </div>
    </LanguageProvider>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#020617",
    color: "white",
    padding: 24,
    maxWidth: 700,
    margin: "0 auto",
  },
};
