import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import Figure from './components/Calculer/Figure';
import Historique from './components/historique/Historique';
import Carre from './components/Carre/Carre';
import Cercle from './components/Cercle/Cercle';
import Trapeze from './components/Trapeze/Trapeze';





function App() {

  
  return (

<Router>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/figure" element={<Figure />} />
    <Route path="/historique" element={<Historique />} />
    <Route path="/carre" element={<Carre />} />
    <Route path="/cercle" element={<Cercle />} />
    <Route path="/trapeze" element={<Trapeze />} />
  </Routes>
</Router>

  );
}

export default App;


