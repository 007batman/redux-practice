import "./App.css";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App ">
      <Navbar title="The Master Crud" />
      <LoginPage/>
    </div>
  );
}

export default App;
