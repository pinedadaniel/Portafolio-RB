import React from 'react';
import "./styles/NavBarStyle.css";
import brand from '../images/brand.png';
import {ReactComponent as dd} from '../images/dd.svg';
import service from '../images/icon-service.png';
import proyec from '../images/icon-proyec.png';
import xp from '../images/dd.svg';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import about from '../images/icon-about.png';





class Navbar extends React.Component {
    render(){
        return (
        

<nav class="navbar navbar-expand-lg navbar-light " id='header'>
 
<Link className="navbar-brand"  to="#">
            <img src={brand} id='brand' width="200" height="80" className="d-inline-block align-top" alt="IconDisk"/>
            <span className="menu-collapsed" ></span>
           
          </Link>
         

  <button class="navbar-toggler btn btn-light" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon bg-secondary"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto"  id='contItem'>
      <li class="nav-item">
      <span className='itemNav'>   <a class="nav-link"  href="#">  <i class="fas fa-store iconNav"></i>  Inicio  </a></span>  
      </li>                                       
      <li class="nav-item">
      <span className='itemNav'>    <a class="nav-link" href="#">  <i class="fas fa-tools iconNav" ></i>  Servicios  </a></span>
      </li>
      <li class="nav-item">
      <span className='itemNav'>    <a class="nav-link" href="#">  <span class="frame grey-out"></span>   Sobre Mi </a></span> 
      </li> 
      <li class="nav-item">
      <span className='itemNav'> <a class="nav-link" href="#">   <img src={xp} className='icon'/>   Experiencia </a></span>
      </li>
      <li class="nav-item">
      <span className='itemNav'> <a class="nav-link" href="#"> <div className='frame invert '> </div> Proyectos  </a></span>
      </li>
      <li className="nav-item">
      <a  className="btn btn-outline-light btn-contac text-primary" data-toggle="modal" data-target="#modalCompra">CONTACTAME!</a>
      </li>
      <div> 
        
      </div>
      
    </ul>
  </div> 
  
</nav>
  

        );
    }
}

export default Navbar;