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
                <video autoPlay muted loop id='miFondo'>
                    <source src={fondo} type='video/mp4' />
                </video>
                <div className="container">
                    <div className='row '>
                        <div className='col-xl-12 contDiseñoWeb'>
                            <div className='contMainHome'>
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

                                <div class="box ">
                                    <p class="split"> Programador Front_Ends</p>


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