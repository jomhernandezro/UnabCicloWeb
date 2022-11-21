import React, { useRef } from "react";
export function CategoriaCreate() {
  const refNombre = useRef(null);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Enviando Datos");
    //const dep = String("Karate")
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre: refNombre.current.value }),
    };
    fetch("http://localhost:3002/api/categoria/", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("error" + error));
  };
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 offset-4">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Categoria Nombre</label>
              <input
                type="texto"
                class="form-control"
                ref={refNombre}
                onChange={function () {
                  console.log("digitando...");
                }}
                placeholder="Categoria"
              />
            </div>

            <div class="form-group my-4">
              <button type="submit" class="btn btn-primary">
                Añadir categoria
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
