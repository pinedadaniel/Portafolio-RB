import React from 'react';
import "./styles/NavBarStyle.css";
import brand from '../images/brand.png';
import iconHome from '../images/iconHome.svg';
import iconService from '../images/iconService.svg';
import iconProject from '../images/iconProject.svg';
import iconAbout from '../images/iconAbout.svg';
import { Link } from 'react-router-dom';
import $ from 'jquery';


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
         <a class="nav-link" href="#"> <img src={iconHome} width='27'/>  INICIO  </a>
      </li>                                   
      <li class="nav-item">
         <a class="nav-link" href="#"> <img src={iconService} width='27'/>  SERVICIOS  </a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="#"> <img src={iconAbout} width='27'/> SOBRE MI </a> 
      </li> 
    
      <li class="nav-item">
    <a class="nav-link" href="#"> <img src={iconProject} width='27'/> PROYECTOS  </a>
      </li>
      <li className="nav-item">
      <a  className="btn btn-outline-light btn-contac text-warning" data-toggle="modal" data-target="#modalCompra">CONTACTAME!</a>
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