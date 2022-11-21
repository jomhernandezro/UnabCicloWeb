import { Routes, Route, Link } from "react-router-dom";
import { CategoriaCreate } from "./Layout/categories/CategoriaCreate";

export function Tablero() {
  return (
    <div className="row">
      <div className="col-3">
        Menu
        <ul>
          <li>
            <Link to="/tablero/categoriacreate">Categorias</Link>
          </li>
          <li>Equipos</li>
        </ul>
      </div>
      <div className="col-9">
        <Routes>
          <Route path="/categoriaCreate" element={<CategoriaCreate />}></Route>
        </Routes>
      </div>
    </div>
  );
}
