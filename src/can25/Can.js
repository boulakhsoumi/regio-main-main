import { useState } from "react";
import matches from "./DataCan"; // Assurez-vous que le fichier DataCan exporte correctement les données
import "./Can.css";
import { Link } from "react-router-dom";
import {FaCalendarAlt,FaClock,FaWarehouse  } from 'react-icons/fa'
export default function Can() {
  const [matche, setMatche] = useState(matches);

  return (
    <div>
        <h1>CAN25</h1>
        <div className="caard">
      {matche.map((item, index) => {
        return (
          <div key={index} className="card">
            <img src={item.img} width={"200px"} alt="cover matche" />
            <h1>{item.teams}</h1>
            <p><FaWarehouse />   {item.stadium}</p>
            <p><FaCalendarAlt />   {item.date}</p>
            <p><FaClock />   {item.time}</p> <br/>
            <Link to="/achat" ><button type="button" class="btn btn-success">j'achete</button></Link> <br/>
            
          </div>
          
        );
      })}
    </div>
    <Link to="/can"><button className="voirplus">voir plus </button> </Link>
    </div>
  );
}
