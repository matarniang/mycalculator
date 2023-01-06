import React from 'react';
import { useState } from "react";
import "./Cercle.css";

export default function Cercle() {



  // const [history, setHistory] = useState(
  //   JSON.parse(localStorage.getItem("calculator-app-history")) || []
  // );



  const [rayon, setRayon] = useState(0);
  const [surface, setSurface] = useState(0);
  const [perimetre, setPerimetre] = useState(0);

  function handleNumber1Change(e) {
    setRayon(Number(e.target.value));
  }


  function Calculer() {

    if(rayon!==0){
      setPerimetre(2*3.14*rayon);
      setSurface(3.14*rayon*rayon);
      // let tempHistory = [["Figure Cercle",perimetre,surface]];
      // setHistory(tempHistory);
      // localStorage.setItem("calculator-app-history", JSON.stringify(history));
    }
   
  }

  return (
    <div className="Cercle">
      <h1>Saisir le rayon du Cercle</h1>

      <div className="number-inputs">
        <input type="number" placeholder="0" onChange={handleNumber1Change} />
      </div>

      <button onClick={Calculer}>Resultat</button>
      <h1><p>Perimetre Surface</p></h1>

      <div className="number-inputsll">
        <input  placeholder="Perimetre" value={perimetre} />
        <input  placeholder="Surface" value={surface} />
      </div>

    </div>
  );
}










