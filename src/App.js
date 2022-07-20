import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.css";
import HomePage from "./containers/HomePage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
