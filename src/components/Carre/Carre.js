import React from 'react';
import { useState } from "react";
import "./Carre.css";

export default function Carre() {


  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("calculator-app-history")) || []
  );
  

  const [carre, setCarre] = useState(0);
  const [surface, setSurface] = useState(0);
  const [perimetre, setPerimetre] = useState(0);

  function handleNumber1Change(e) {
    setCarre(Number(e.target.value));
  }


  function Calculer() {

    if(carre!==0){
      setPerimetre(carre*carre);
      setSurface(carre*4);
      let tempHistory = [["Figure Carre",perimetre,surface]];
      setHistory(tempHistory);
      localStorage.setItem("calculator-app-history", JSON.stringify(history));


    }
  }

  return (
    <div className="Carre">
      <h1>Saisir la longeur du Carre</h1>

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



// Name: <input type="text" id="myText" value="Mickey">

// <p>Click the button to change the value of the text field.</p>

// <button onclick="myFunction()">Try it</button>


// function myFunction() {
//   document.getElementById("myText").value = "Johnny Bravo";

