import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../global";

function Team() {
  const [evento, setEvento] = useState([]);

  
  useEffect(() => {
    const fetch = async () => {
      let raw = await axios.get(API + "/api/evento/all", {
        headers: {
          "access-token": localStorage.getItem("TOKEN"),
        },
      });
      setEvento(raw.data);
    };
console.log(evento);
    fetch();
  }, []);

  return (
    <>
      <div className="container my-3">
        {evento.map((item, index) => (
          <div
            key={index}
            className="card card-body mt-2 col-md-7 mx-auto float-center"
          >
            <div className="col-md-4 my-2 offset-3">
              <span className="badge-dark p-3">{item.nombre}</span>
              <span className="badge-dark ">{item.fecha}</span>
              <span className="badge-primary p-2  ">{item.tipo_deporte}</span>
              <div className="row">
                  <span>{item.equipo1}</span>
                <span className="badge bg-secondary">{item.marcador}</span>
                  <span>{item.equipo2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Team;
