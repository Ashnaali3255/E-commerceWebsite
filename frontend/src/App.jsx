import Navbar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300" data-theme = "forest">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
