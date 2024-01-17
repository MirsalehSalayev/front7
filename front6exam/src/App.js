import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/add";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Basket from "./pages/basket";
import Detail from "./pages/detail";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/basket" element={<Basket/>} />
        <Route path="/detail/:id" element={<Detail/>} />
       
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
