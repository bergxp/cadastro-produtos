import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/servicos" element={<Servicos/>}></Route>
    </Routes>
  )
}

export default MainRoutes;