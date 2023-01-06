import React from 'react';
import { useState } from "react";
import "./Trapeze.css";

export default function Trapeze() {

  // const [history, setHistory] = useState(
  //   JSON.parse(localStorage.getItem("calculator-app-history")) || []
  // );

  const [petitBaseA, setpetitBaseA] = useState(0);
  const [grandBaseB, setgrandBaseB] = useState(0);
  const [coteC, setcoteC] = useState(0);
  const [coteD, setcoteD] = useState(0);
  const [hauteur, setHauteur] = useState(0);
  const [surface, setSurface] = useState(0);
  const [perimetre, setPerimetre] = useState(0);

  function handleNumberAChange(e) {
    setpetitBaseA(Number(e.target.value));
  }

  function handleNumberBChange(e) {
    setgrandBaseB(Number(e.target.value));
  }

  function handleNumberCChange(e) {
    setcoteC(Number(e.target.value));
  }

  function handleNumberDChange(e) {
    setcoteD(Number(e.target.value));
  }

  function handleNumberHChange(e) {
    setHauteur(Number(e.target.value));
  }

  function Calculer() {

    if(petitBaseA!==0 && grandBaseB!==0 && coteC!==0 && coteD!==0){

      setPerimetre(petitBaseA+grandBaseB+coteC+coteD);
      setSurface( ( (petitBaseA+grandBaseB)*hauteur )/2 );
      // let tempHistory = [["Figure Trapeze",perimetre,surface]];
      // setHistory(tempHistory);
      // localStorage.setItem("calculator-app-history", JSON.stringify(history));
    }


  }

  return (
    <div className="Trapeze">
      <h1 className='titre'>Saisir les dimensions du Trapeze</h1>

      <div className="number-inputs">
        <input   type="number" placeholder="petite base" className='taille' onChange={handleNumberAChange} />
        <input type="number" placeholder="B" onChange={handleNumberBChange} />
        <input type="number" placeholder="C" onChange={handleNumberCChange} />
        <input type="number" placeholder="D" onChange={handleNumberDChange} />
        <input type="number" placeholder="H" onChange={handleNumberHChange} />

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










