import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();

  return (
        <div className="Login">
      <header className="App-header">
      <div class="marquee-rtl">
 				<div>Merci de saisir votre nom pour se connecter</div>
 		   </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className="number-inputs">
      <h3>Saisir Votre Nom</h3>
      <form>
         <label>
           <input class="mylogin" name="name" />
         </label>
         <br/><br/><br/>

       <button  onClick={() =>{
          navigate('/figure')  
       }}
       >
        Submit</button>
      </form>
    </div>
      </header>
    </div>
  );
}