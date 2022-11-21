import React, { useState, useEffect } from 'react'
import axios from 'axios'
import API from "../global"

export default function Equipo() {

  const [Equipo, setEquipo] = useState([]);

  const fetch = async () => {
    let raw = await axios.get(API+"/api/equipo/all", {
      headers: {
        'access-token': localStorage.getItem("TOKEN")
      }
    })
    setEquipo(raw.data);
  };

  useEffect(() => {
    fetch()
  
  }, []);

  return (
    <>

     <div className='container my-3'>
      
     {Equipo.map((item, index) => (
              <div key={index} className="card card-body col-md-5 mx-auto float-center">
                <div className="card">
                <span className='badge bg-dark mb-3 p-3 '> {item.nombre} </span>
                  
                </div>
              </div>
            ))
            }

     </div>
    
    </> 
  )
}