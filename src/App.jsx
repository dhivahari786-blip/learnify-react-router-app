import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import Navbar from "./components/Navbar";

function App() {
  return (
<>
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
</>
  );
}

export default App;