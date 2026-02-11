import React from "react";
import useLanguage from "../hooks/useLanguage";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  // 언어 토글
  const toggleLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };

  return (
    <header style={styles.header}>
      <h2>언어 변경 테스트</h2>

      <button onClick={toggleLanguage} style={styles.btn}>
        {t("changeLanguage")}
      </button>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    background: "#1e293b",
  },

  btn: {
    padding: "8px 14px",
    borderRadius: 8,
    border: "none",
    background: "#38bdf8",
    color: "#000",
    cursor: "pointer",
  },
};
