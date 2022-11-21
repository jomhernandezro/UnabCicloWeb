import { Link } from "react-router-dom";
export function Login() {
  const handleBoton = () => {
    console.log("presionado Boton");
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Enviando Datos");
  };
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 offset-4">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                onChange={function () {
                  console.log("digitando...");
                }}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="form-group my-4">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={handleBoton}
              >
                Acceder
              </button>
              <Link to="/tablero"> Tablero</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
