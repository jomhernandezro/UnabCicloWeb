import React from "react";
import { Link } from "react-router-dom";
import control from "../../global"
function Header() {

  function cerrar_sesion (){
    localStorage.clear();
    control.push("/Logiin"); window.location.reload(true);
  };

  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link
              className="btn btn-outline-info navbar-brand mx-auto text-white"
              to="/"
              aria-label="Bootstrap"
            >
              Inicio
            </Link>
          </div>
          <div>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/categorias">
                  Categorias
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Equipo">
                  Equipos
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right"></ul>
          </div>
          <div className="nav-item dropdown my-2 my-sm-0">
            <Link className="btn btn-outline-warning" to="/logiin">
              Login
            </Link>

            <Link className="btn btn-outline-warning mx-2" to="/create">
              Create
            </Link>

            <Link className="btn btn-outline-warning mx-2" onClick={cerrar_sesion} to="/logiin">
              cerrar
            </Link>
           
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;