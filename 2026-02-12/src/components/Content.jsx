import React from "react";
import useLanguage from "../hooks/useLanguage";

export default function Content() {
  const { t, language } = useLanguage();

  return (
    <main style={styles.box}>
      <p>현재 언어: {language}</p>

      <h1>{t("greeting")}</h1>
      <p>{t("welcome")}</p>
    </main>
  );
}

const styles = {
  box: {
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    background: "#020617",
    border: "1px solid #1e293b",
  },
};
