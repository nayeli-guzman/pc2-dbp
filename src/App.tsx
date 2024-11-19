import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage";
import CreateProductPage from "./pages/CreateProduct";


export default function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/auth/login" element={<LoginPage/>}/>
          <Route path="/products" element={<CreateProductPage/>}/>


        </Routes>
      </BrowserRouter>
  );
};

