import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Typography from "./pages/Typography/Typography";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>        
        <Route path="/menu" element={<Menu/>}/>        
        <Route path="/typography" element={<Typography/>}/>        
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
