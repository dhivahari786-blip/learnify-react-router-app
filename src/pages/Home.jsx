import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Welcome to Learnify</h1>
      <p>Your one-stop platform to learn and grow your skills.</p>

      <button
        onClick={() => navigate("/users")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Explore Users
      </button>
    </div>
  );
}

export default Home;