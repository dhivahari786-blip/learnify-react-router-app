import { Link } from "react-router-dom";
import { users } from "../data/users";
import "../styles/App.css";

function Users() {
  return (
    <div className="container">
      <h1>Users Page</h1>

      {users.map((user) => (
        <div key={user.id} className="card">
          <h3>{user.name}</h3>
          <p>{user.role}</p>

          <Link to={`/users/${user.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Users;