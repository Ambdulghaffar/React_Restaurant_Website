import "./App.css";
import Header from "./components/body/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import { CartProvider } from "./components/Menu/CartContext";
import Commandes from "./pages/Commandes/Commandes";
import { FormProvider } from "./components/Menu/CommandesContext";

function App() {
  return (
    <>
      <CartProvider>
        <FormProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/commandes" element={<Commandes />} />
            </Routes>
          </BrowserRouter>
        </FormProvider>
      </CartProvider>
    </>
  );
}

export default App;
