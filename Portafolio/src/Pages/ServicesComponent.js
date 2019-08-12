import React from 'react';
import { Link } from 'react-router-dom';
import to from '../images/to.jpg';
import wb from '../images/dw.jpg';
import dr from '../images/dr.jpg';
import "./styles/ServicesStyle.css";

class Services extends React.Component {

    render() {

        return (
            <React.Fragment>
                <div class='container t'>
                    <div class='row p'>
                        <div class='col-12 col-md-6 col-xl-4'>
                            <div class="card bg-warning" width='18'>
                                <img src={wb} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Diseño Web</h5>
                                    <p class='text-center'> Estilos y Diseños Personalizados </p>
                                </div>
                            </div>
                        </div>
                        <div class='col-12 col-md-6 col-xl-4'>
                        <div class="card bg-warning" width='18'>
                                <img src={dr} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Diseño Responsivo</h5>
                                    <p class='text-center'> Adaptabilidad a todas las Pantallas </p>
                                </div>
                            </div>
                        </div>
                        <div class='col-12 col-md-6 col-xl-4'>
                        <div class="card bg-warning" width='18'>
                                <img src={to} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Tienda Online</h5>
                                    <p class='text-center'> Marketing Digita </p>
                                </div>
                            </div>
                        </div>
                    
                      
                    
                    </div>
                </div>
            </React.Fragment>

        );

    }
}
export default Services;