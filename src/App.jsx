import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Home from "./components/Home/Home";

const App = () => {
  const { token } = useAuth();

  return (
    <Routes>
      <Route path="/" element={!token ? <Home /> : <Navigate to={"/login"} />} />
    </Routes>
  );
};

export default App;
