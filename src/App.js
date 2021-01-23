import React,{useState} from 'react';
import './App.css';
import Header from './Header'
import { BrowserRouter, Switch,Route,Redirect} from 'react-router-dom'
import Menu from './Menu'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <BrowserRouter>
    <div className="app">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      </div> 
      {isMenuOpen&& <Menu/>}  
    </BrowserRouter>
  );
}

export default App;
