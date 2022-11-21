import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import control from "./../../history";
import API from "./../../global";
// import "../App.css";

export default function Logiin() {
  // document.body.style.backgroundColor = "#1C2833";

  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const change = (event) => {
    setUsuario(event.target.value);
  };
  const change2 = (event) => {
    setClave(event.target.value);
  };

  const redirect = (ruta) => {
    control.push(ruta);
    window.location.reload(true);
  };
  // const goRegister = () => {
  //   redirect("/register");
  // };

  const verify = async () => {
    let data = await axios
      .post(API + "/api/auth/login", {
        usuario: usuario,
        clave: clave,
      })
      .catch((errr) => {
        alert(errr);
      });
    localStorage.setItem("TOKEN", data.data);
    if (localStorage.getItem("TOKEN")) {
      redirect("/");
    }
  };

  // const handleBoton = () => {
  //   console.log("presionado Boton");
  // };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Enviando Datos");
  };

  return (
    <>
      <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 offset-4">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="usuario" className="text-black" >Usuario</label>
              <input
                type="texto"
                class="form-control"
                id="usuario"
                value={usuario}
                onChange={change}
                placeholder="usuario"
              />
            </div>
            <div class="form-group">
              <label for="clave" className="text-black">Clave</label>
              <input
                type="password"
                class="form-control"
                id="clave"
                value={clave} 
                onChange={change2} 
                placeholder="clave"
              />
            </div>
            <div class="form-group my-4">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={verify}
              >
                Acceder
              </button>
              <Link className="mx-2" to="/Tablero"> Tablero</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
