import { useState } from "react";
import "./Concert.css";
import { Link } from "react-router-dom";
import concerts from "./DataConcert";
import {FaCalendarAlt,FaClock,FaWarehouse  } from 'react-icons/fa'


export default function Concert() {
  const [Concert, setConcert] = useState(concerts);

  return (
    <div>
      <h1>Concerts & Festivals</h1>
      <div className="caard">
        {Concert.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} width="200px" alt={`Concert de ${item.artist}`} />
            <h1>{item.artist}</h1>
            <p><FaWarehouse/>   {item.place}</p>
            <p><FaCalendarAlt/>   {item.date}</p>
            <p><FaClock/>   {item.time}</p> <br />
            <Link to="/achat">
              <button type="button" className="btn btn-success">J'achète</button>
            </Link> <br />
          </div>
        ))}
      </div>
      <Link to="/concerts">
        <button className="voirplus">Voir plus</button>
      </Link>
    </div>
  );
}
