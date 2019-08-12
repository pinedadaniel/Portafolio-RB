import React from 'react';
import "./styles/CardStyles.css";
import foto2 from '../images/foto2.jpg';
import foto3 from '../images/foto3.jpg';
import foto from '../images/foto.jpg';
import foto4 from '../images/foto4.jpg';
import diseño_web from '../images/diseno_web.jpg';

import store2 from '../images/store2.jpg';


import responsi from '../images/responsi.jpg';
import responsi1 from '../images/responsi1.png';
import solution from '../images/solution.jpg';
class Cards extends React.Component {
    render() {
        return (
            <React.Fragment>
<div class='container'> 
 
<div class="boxesContainer">
 
 <div class="cardBox">
   <div class="card">
     <div class="front">
       <h3 class='tittleCardAbout'>Datos Personales</h3>

       <h3 class='tittleParAbout'>Nombre Completo:</h3>
       <h3 class='ParAbout'> > Kevin Daniel Pineda </h3>
       <h3 class='tittleParAbout'>Lugar Nacimiento:</h3>
       <h3 class='ParAbout'>> Medellin/Colombia </h3>
       <h3 class='tittleParAbout'>Lugar Residencia:</h3>
       <h3 class='ParAbout'> > Medellin/Antioquia </h3>

       <strong>&#x21bb;</strong>
     </div>
     <div class="back">
       <h3 class='tittleCardAbout'>Datos Presentacionales</h3>

       <h3 class='tittleParAbout'>Programador Front-End</h3>
       <div className='contimgAbout'> 
       <div className="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
            <div className="carousel-inner">
           
                <div className="carousel-item active">
                    <img src={foto2} className="d-block w-100" alt="fondo"/>
                </div>
                <div className="carousel-item">
                    <img src={foto3} className="d-block w-100" alt="fondo"/>
                </div>
                <div className="carousel-item">
                    <img src={foto3} className="d-block w-100" alt="fondo"/>
                </div>
                <div className="carousel-item">
                    <img src={foto} className="d-block w-100" alt="fondo"/>
                </div>
                <div className="carousel-item">
                    <img src={foto4} className="d-block w-100" alt="fondo"/>
                </div>
              
                </div>
                </div>
                </div>
                <a class='buttonCardAbout' href="#">Ver Proyectos</a>
     </div>
   </div>
 </div>

 <div class="cardBox">
   <div class="card">
     <div class="front">
       <h3 class='tittleCardAbout'>Habillidades de Programador</h3>
       <h3 class='tittleParAbout'>Lenguajes de Programacion</h3>
       <h3 class='ParAbout'> > JavaScript - Java </h3>
       <h3 class='tittleParAbout'>Etiqueta y Diseño</h3>
       <h3 class='ParAbout'> > HTML5 - CSS3 </h3>
       <h3 class='tittleParAbout'>Herramientas</h3>
       <h3 class='ParAbout'> > ReactJs - Bootstrap</h3>
       <strong>&#x21bb;</strong>
     </div>
     <div class="back">
     <h3 class='tittleCardAbout'>Habillidades de Programador</h3>


<div className='contimgAbout'> 
<div className="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
     <div className="carousel-inner">
    
         <div className="carousel-item ">
             <img src={diseño_web} className="d-block w-100" alt="fondo"/>
         </div>
       
         <div className="carousel-item">
             <img src={store2} className="d-block w-100" alt="fondo"/>
         </div>
        
         <div className="carousel-item active">
             <img src={responsi} className="d-block w-100" alt="fondo"/>
         </div>
         <div className="carousel-item">
             <img src={responsi1} className="d-block w-100" alt="fondo"/>
         </div>
         <div className="carousel-item">
             <img src={solution} className="d-block w-100" alt="fondo"/>
         </div>
        
       
         </div>
         </div>
         </div>
       <a class='buttonCardAbout' href="#">Ver Servicios</a>
     </div>
   </div>
 </div>




</div>

</div>
<a href="#sectionAbout2" className="btn btn-outline-warning mt-3 ml-3 Back2"> <span>Volver a la Seccion Anterior ↑</span> </a>  
<a href="#sectionAbout4" className="btn btn-outline-warning mt-3 ml-3 Next2"> <span>Continua para mas Informacion ↓</span> </a>  
            </React.Fragment>

        );
    }
}

export default Cards;