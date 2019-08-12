import React from 'react';
import HTML5 from '../images/HTML5.png'
import CSS3 from '../images/CSS3.svg'
import BOOTSTRAP from '../images/BOOTSTRAP.png'
import JAVASCRIPT from '../images/JAVASCRIPT.png'
import REACTJS from '../images/REACTJS.png'
import "./styles/AboutStyle.css";
import Cards from '../components/CardsComponent.js'
import { Link } from 'react-router-dom';
import vitae from '../images/hola.pdf'



class About extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="bg-About1" id='sectionAbout1'>
                   
                
                <div className='container'>
                    <div className='row'>       
                        <div className='col-sm-9 col-md-8 col-lg-8 '> 
                        <div className='contAbout1'> 
                        <p className='presentationAbout'> 
                            Hola Soy Kevin Daniel Pineda y llevo cerca de 2 años Programando en exclusiva como diseñador 
                            web Front-End. Lo que comenzó siendo un Hobby Con el tiempo se convirtio en mi vision de un 
                            Futuro Laboral, a lo largo de los años, eh adquirido diferentes Habilidades que me ayudan a 
                            desempeñarme de la mejor manera dentro de un proyecto, combinándolo con habilidades Sociales
                            para un Mejor rendimiento tanto Laboral como Personal.
                            <a href="#sectionAbout2" className="btn btn-outline-warning arrowGo"> <span>Siguiente ↓</span> </a>
                        </p>
                        </div>
                        </div>
                    </div>
                </div>                 
                </div>
                <div className="bg-About2" id='sectionAbout2'>
                   
             
                   <div className='container'>
                       <div className='row'>       
                           <div className='col-lg-12 col-xl-8'> 
                           <div className='contAbout2'>
                           <p className='ofertsAbout'> Ofrezco soluciones integrales a empresas y profesionales de cara a crear su imagen digital 
                               y a conectarlo con sus usuarios, ya sea mediante grandes o pequeños presupuestos, Haciendo usu
                               de las mejores herramientas del mercado como lo son ReactJS Bootstrap-4 HTML5 CSS3 y JavaScript 
                               <div className='contImgTools'> 
                                    <img src={REACTJS} className='imgREACTJS'/> 
                                </div>
                                <div className='contImgTools'> 
                                    <img src={BOOTSTRAP}  className='imgBOOTSTRAP'/> 
                                </div>
                                <div className='contImgTools'> 
                                    <img src={HTML5} className='imgHtml5'/> 
                                </div>
                                <div className='contImgTools'> 
                                    <img src={CSS3} className='imgCSS3'/> 
                                </div>
                                <div className='contImgTools'> 
                                    <img src={JAVASCRIPT} className='imgJAVASCRIPT'/> 
                                </div>
                              
                                <a href="#sectionAbout1" className="btn btn-outline-warning ArrowBack "> <span>Volver ↑</span> </a>  
                                <a href="#sectionAbout3" className="btn btn-outline-warning ArrowNext "> <span>Siguiente   ↓</span> </a>  
                               </p>
                             
                               </div>
                           </div>
                           <div className='col-xl-4 contImgAbout2'>
                               <div className='contImgFront-end'> </div>

                           </div>
                       </div>
                       
                   </div>                 
                   </div>
                   <div className="bg-About3" id='sectionAbout3'>
                   
                  <Cards/>
                      
                   </div>
                   <div className="bg-About4" id='sectionAbout4'>
                        <div className='container'>
                         <div className='row'>
                    
                      
                            <div className='col-12'> 
                 
                        <a className='btn btn-primary btn-lg bt-currim' href='https://personas.serviciodeempleo.gov.co/Postulante/hv_ver.aspx' target='_blank'>
                            Ver Curriculum
                        </a>
                      
                        </div>
                   </div>
                   </div>
                       
                    </div>

              
               
                </React.Fragment>
            
        );
    }
}

export default About;