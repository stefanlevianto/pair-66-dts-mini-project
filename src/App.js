import "./App.css";
import HomePage from "./containers/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import ProfilePage from "./components/ProfileForm";
import DetailMoviePage from "./containers/DetailMoviePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="moviedetail" element={<DetailMoviePage />} />
        <Route path="/" element={<ProfilePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
