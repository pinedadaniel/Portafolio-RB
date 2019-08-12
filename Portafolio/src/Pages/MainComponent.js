import React from 'react';
import { Link } from 'react-router-dom';
import iconShoppingCart from '../images/icon-ShoppingCart.png';
import iconPaint from '../images/icon-paint.png';
import iconPhone from '../images/icon-phone.svg';
import iconJs from '../images/icon-js.png';
import iconReact from '../images/icon-react.png';
import iconpubli from '../images/icon-publi.png';
import fondo from '../images/bg.mp4';
import "./styles/MainStyle.css";

class Main extends React.Component {

    render() {

        return (
            <React.Fragment>
                <video className='refreshVideo'  autoPlay muted loop id='miFondo'>
                    <source src={fondo} type='video/mp4' />
                </video>
                <div className="container">
                    <div className='row '>
                        <div className='col-12 contDiseñoWeb'>
                            <div className='contDivMain '>
                                <div className='contWebDesign'>
                                    <button type="button"
                                        className="btn btn-lg btn btn-outline-warning btn-webDesign text-left">
                                        <span><img src={iconPaint} className='imgWebDesign' /> </span>
                                        <span className='textButtomHome text-primary'> Diseño Web </span> </button>
                                </div>
                                <div className='contShoppingOnline'>
                                    <button type="button"
                                        className="btn btn-lg btn btn-outline-warning btn-ShoppingOnline text-left">
                                        <span><img src={iconShoppingCart} width='40' /> </span>
                                        <span className='textButtomHome text-primary'> Tiendas Online </span> </button>
                                </div>
                                <div className='contResponsiveDesign'>
                                    <button type="button"
                                        className="btn btn-lg btn btn-outline-warning btn-ResponsiveDesign text-left">
                                        <span><img src={iconPhone} width='38' /> </span>
                                        <span className='textButtomHome text-primary'> Diseño Responsivo </span> </button>
                                </div>
                                <div className='contSolutionWeb'>
                                    <button type="button"
                                        className="btn btn-lg btn btn-outline-warning btn-solutionWeb text-left">
                                        <span><img src={iconJs} width='34' /> </span>
                                        <span className='textButtomHome text-primary'> Soluciones Web </span> </button>
                                </div>
                                <div className='contAppReact'>
                                    <button type="button"
                                        className="btn btn-lg btn btn-outline-warning btn-appReact text-left">
                                        <span><img src={iconReact} width='38' /> </span>
                                        <span className='textButtomHome text-primary'> Aplicaciones Web</span> </button>
                                </div>
                                <div className='contAdvertising'>
                                    <button type="button"
                                        className="btn btn-lg btn btn-outline-warning btn-advertising text-left">
                                        <span><img src={iconpubli} width='38' /> </span>
                                        <span className='textButtomHome text-primary'> Publicidad y Redes Sociales </span> </button>
                                </div>



                            </div>

                            <div className='contTextMain '>
                                <h1 className='text-light  nameHome'>  Kevin Daniel Pineda   </h1>
                                <hr />
                                <h1 className='text-light  rolHome'> Programador Front_End    </h1>
                                <a href="#" className="btn btn-outline-warning btn-homeContact"data-toggle="modal" data-target="#modalCompra2" id='btn-contac'>Conctactos</a>
                                <button type="button" className="btn btn-homeMesagge " data-toggle="modal" data-target="#modalCompra">
                                    Enviame un Mensaje</button>

                                <div className='presentHome'>
                                    <h1 className='textPresentHome'>"El <span className='present'>Éxito </span> es la <span className='present'> habilidad </span> 
                                    de ir de fracaso en <span className='present'>fracaso, </span> sin perder el <span className='present'> entusiasmo</span>"</h1>
                                   
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
       
            </React.Fragment>

        );

    }
}
export default Main;