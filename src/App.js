import "./App.css";
import Crud from "./components/Crud";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Routes, Link,Navigate} from "react-router-dom";

import Home from "./components/Home";
import CreateUser from "./components/CreateUser";

function App() {
  function PrivateRoute({ children }) {
    const auth = localStorage.getItem("username");
    let condition = false
    if( auth === 'batman'){
      condition = true
    }

    return condition ? children : <Navigate to="/CreateUser" />;
  }
  return (
    <Router>
      <div className="App ">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
              <Home/>
              </PrivateRoute>
            }
          />
           
          <Route path="/CreateUser" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
