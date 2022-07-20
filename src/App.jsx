import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import HomePage from "./components/homePage/HomePage";
import Navbar from "./components/navbar/Navbar";
import './styles/app.style.scss'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="">

          <Route index element={<HomePage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
