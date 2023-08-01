
import { Routes, Route} from "react-router-dom";
import Login from "./component/Login/Login";
import HomePage from "./pages/HomePage";
import "./App.css";
import Signup from "./component/Signup/Signup";

function App() {
  return (
    <div className="App">
        <Routes >
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
export default App;


