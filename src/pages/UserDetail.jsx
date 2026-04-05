import { useParams } from "react-router-dom";
import { users } from "../data/users";

function UserDetail() {
  const { id } = useParams();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h2>User Not Found</h2>;
  }

  return (
  <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        textAlign: "center",
      }}
    >
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p>{user.bio}</p>
    </div>
  </div>
);
}

export default UserDetail;