import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./../Layout";
import Home from "./../../container/Home";
import Logiin from "../users/Logiin";
import Create from "../users/Create";
import Categorias from "../Categorias";
import Equipo from "../Equipo"
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Logiin" element={<Logiin />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/Equipo" element={<Equipo/>}/>
          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
