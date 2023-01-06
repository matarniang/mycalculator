import "./Figure.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';




export default function Figure() {
  const navigate = useNavigate();


  return (
    <div className="Figure">
    <div class="marquee-rtl">
 				<div>Merci de cliquez sur une figure pour calculer sa surface et son perimetre</div>
 		</div>
  <div className="number-inputs">
      <Row>
        <Col>
        <button onClick={() =>{
            navigate('/carre')  
            }}>Carre</button>
        <button onClick={() =>{
            navigate('/cercle')  
            }}>Cercle</button>
        </Col>
      </Row>
      <Row>
        <Col>
        <button onClick={() =>{
            navigate('/trapeze')  
            }}>trapeze</button>
        <button onClick={() =>{
            navigate('/historique')  
            }}>historique</button>
        </Col>
          </Row>
       </div>      
    </div>
  );
}




// import React from 'react';
// import logo from '../../logo.svg';
// import stop from '../../stop.png';
// import newmoon from '../../newmoon.png';
// import trapezium from '../../trapezium.png'
// import task from '../../task.png'
// import './Figure.css';
// import { useNavigate } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';


// export default function Figure() {
//     const navigate = useNavigate();
  
//     return (
//       <div className="Figure">
//         <header className="App-body">
//           <img src={logo} className="App-logo" alt="logo" />

//           {/* <!-- le conteneur fenêtre --> */}
// 			<div class="marquee-rtl">
// 				{/* <!-- le contenu défilant --> */}
// 				<div>message</div>
// 			  </div>

//         <div className="container">
//         <Col>


//           <Card onClick={() =>{
//           navigate('/historique')  
//           }}>
//               <Card.Img src={task}  class="card"/>
//           </Card>

      
//           <Card onClick={() =>{
//           navigate('/carre')  
//           }}>
//             <Card.Img  src={stop}  class="card"/>
//           </Card>


//           <Card onClick={() =>{
//           navigate('/trapeze')  
//           }}>
//             <Card.Img src={trapezium}  class="card"/>
//           </Card>

        
//           <Card onClick={() =>{
//           navigate('/cercle')  
//        }}>
//             <Card.Img  src={newmoon}  class="card"/>
//           </Card>


//           </Col>
//           </div>

       

//         </header>

//       </div>

//     );
  
// }