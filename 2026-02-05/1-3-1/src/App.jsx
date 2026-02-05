import ProfileCard from "./components/Card";

function App() {
  return (
    <main style={stage}>
      <ProfileCard />
    </main>
  );
}

const stage = {
  minHeight: "100vh",
  width: "100vw",
  display: "grid",
  placeItems: "center",
  padding: "24px",
  background:
    "radial-gradient(900px 520px at 20% 15%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(900px 520px at 80% 85%, rgba(168,85,247,0.16), transparent 60%), #000",
};

export default App;
