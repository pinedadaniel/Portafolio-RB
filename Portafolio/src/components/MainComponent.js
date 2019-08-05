import React from 'react';
import { Link } from 'react-router-dom';
import iconShoppingCart from '../images/icon-ShoppingCart.png';
import iconPaint from '../images/icon-paint.png';
import iconPhone from '../images/icon-phone.png';
import iconJs from '../images/icon-js.png';
import iconReact from '../images/icon-react.png';
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
                            <div className='contButtomHome'> 
                            <div className='contWebDesign'>
                                <button type="button"
                                    className="btn btn-lg btn btn-outline-warning btn-webDesign text-left">
                                    <span><img src={iconPaint} className='imgWebDesign' /> </span>
                                    <span className='textButtomHome text-primary'> Diseño Web </span> </button>
                            </div>
                            <div className='contShoppingOnline'>
                                <button type="button"
                                    className="btn btn-lg btn btn-outline-warning btn-ShoppingOnline text-left">
                                    <span><img src={iconShoppingCart} /> </span>
                                    <span className='textButtomHome text-primary'> Tiendas Online </span> </button>
                            </div>
                            <div className='contResponsiveDesign'>
                                <button type="button"
                                    className="btn btn-lg btn btn-outline-warning btn-ResponsiveDesign text-left">
                                    <span><img src={iconPhone} /> </span>
                                    <span className='textButtomHome text-primary'> Diseño Responsivo </span> </button>
                            </div>
                            <div className='contSolutionWeb'>
                                <button type="button"
                                    className="btn btn-lg btn btn-outline-warning btn-solutionWeb text-left">
                                    <span><img src={iconJs} /> </span>
                                    <span className='textButtomHome text-primary'> Soluciones Web </span> </button>
                            </div>
                            <div className='contAppReact'>
                                <button type="button"
                                    className="btn btn-lg btn btn-outline-warning btn-appReact text-left">
                                    <span><img src={iconReact} /> </span>
                                    <span className='textButtomHome text-primary'> Aplicaciones Web con React </span> </button>
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