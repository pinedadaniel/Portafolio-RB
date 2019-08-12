import React from 'react';
import "./styles/FooterStyle.css";
import twitter from '../images/twitter.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkdin.svg';
import phone from '../images/iconFooter-phone.svg';
import cell from '../images/cell.svg';
import cell2 from '../images/cell2.svg';
import location from '../images/location.svg';
import copiR from '../images/copiR.svg';
import email from '../images/email.svg';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    render() {
      return (
        <React.Fragment>

          <footer class=" page-footer font-small blue pt-4">
        
            <div class="container-fluid text-center text-md-left">
           
          
              <div class="row">
  
        
                
             
                <div class="col-md-4 mt-md-0 mt-3">
                      
                  <h5 class="text-uppercase textFooterTittle">Programador Front-End</h5>
          
                  <p className='textFooterP'> ¿Trabajamos Juntos? Enviame un mensaje a cualquiera de mis redes para que podamos Desarrollar un Proyecto Juntos  :)  Te Espero!! </p>
  
                </div>
  
                <div className='col-1'>
                <div className="vl"> 

</div>
                </div>
  
              
                <div class="col-md-3 mb-md-0 mb-3">
  
 
                  <h5 class="text-uppercase linkstittleFooter">contactos</h5>
  
                  <ul class="list-unstyled">
                    <li>
                      <a href="#!" class="linkFooter"><img src={phone} className='' width='20' /> 4993302</a>
                    </li>
                    <li>
                      <a href="https://api.whatsapp.com/send?phone=573206545520&text=Hola!%20Soy%20Daniel%20Pineda%20Enviame%20un%20Mensaje%20y%20Te%20Respondere%20Lo%20Mas%20Rapido%20Posible!%20" target='_blank' class="linkFooter"><img src={cell} className='' width='20' /> (+57) 3013700505</a>
                    </li>
                    <li>
                      <a href="https://api.whatsapp.com/send?phone=573206545520&text=Hola!%20Soy%20Daniel%20Pineda%20Enviame%20un%20Mensaje%20y%20Te%20Respondere%20Lo%20Mas%20Rapido%20Posible!%20" target='_blank' class="linkFooter"><img src={cell2} className='' width='20' /> (+57) 3206545520</a>
                    </li>
                    <li>
                      <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank' class="linkFooter"><img src={email} className='' width='20' /> Danny.Systemyes@Gmail.com</a>
                    </li>
                    <li>
                      <a href="https://www.google.es/maps/place/Medellín" target='_blank' class="linkFooter"><img src={location} className='' width='20' /> Localidad: Medellin/Antioquia  </a>
                    </li>
                  </ul>
  
                </div>
                <div className='col-1'>
                <div className="vl"> 

</div>
                </div>
                   
       
                <div class="col-md-3 mb-md-0 mb-3">

  
                  <h5 class="text-uppercase linkstittleFooter">Buscame</h5>
  
                  <ul class="list-unstyled">
                    <li>
                      <a href="https://github.com/pinedadaniel" target='_blank'> <img src={github} className='iconRedes bg-light rounded' width='32' /> @PinedaDaniel </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/daniel-pineda-36b7a618b/"target='_blank'><img src={linkedin} className='iconRedes' width='32' /> @Daniel Pineda </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Daniel30953516"target='_blank'><img src={twitter} className='iconRedes' width='32' /> @Daniel30953516</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Daniel30953516"target='_blank'><img src={copiR} className='iconRedes' width='32' /> Consulta los Derechos de Autor</a>
                    </li>
                  
  
                  </ul>
  
                </div>
  
  
              </div>
  
  
            </div>
  
            <div class="footer-copyright text-center py-3 Copyright">© 2019 Copyright:
                <a href="https://academia-geek-landing.firebaseapp.com/"> academiageek.co </a> All Rights Reserved
              </div>
  
  
          </footer>
        </React.Fragment>
  
  
      );
    }
  }
  
  export default Footer;