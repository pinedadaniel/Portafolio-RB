import React from 'react';
import twitter from '../images/twitter.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkdin.svg';
import gmail from '../images/gmail.svg';
import phoneb from '../images/phoneblack.svg';
import cellb from '../images/cellblack.svg';
import cell2b from '../images/cell2black.svg';

class modal extends React.Component {
    render() {
        return (
            <div className="modal fade" id="modalCompra1" tabIndex="-1" role="dialog" aria-labelledby="modalCompraTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-warning" id="modalCompraTitle">PUEDES CONTACTARME POR:</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="form-row">
                                   
                                    <h5 class=" text-success"> Mis Redes Sociales y de Trabajo :</h5>

                                    <ul class="list-unstyled d-inline">
                                        <li>
                                            <a href="https://twitter.com/Daniel30953516" target='_blank'><img src={twitter} className='iconRedes' width='32' /> --> en Twitter como @Daniel30953516</a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/daniel-pineda-36b7a618b/" target='_blank'><img src={linkedin} className='iconRedes' width='32' /> --> en Linkedin como Daniel Pineda </a>
                                        </li>
                                        <li>
                                            <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'><img src={gmail} className='iconRedes' width='32' /> --> en Gmail como Danny.Systemyes@G</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/pinedadaniel" target='_blank'> <img src={github} className='iconRedes bg-light rounded' width='32' /> --> en Hithub como /PinedaDaniel </a>
                                        </li>
                                    </ul>
                                 
                                    <h5 class="text-success">Mis Numeros de Contacto : </h5>

                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="https://api.whatsapp.com/send?phone=573206545520&text=Hola!%20Soy%20Daniel%20Pineda%20Enviame%20un%20Mensaje%20y%20Te%20Respondere%20Lo%20Mas%20Rapido%20Posible!%20" target='_blank' class="text-primary"><img src={phoneb} className='' width='28' /> --> Numero Fijo (Colombia) 4993302</a>
                                        </li>
                                        <li>
                                            <a href="https://api.whatsapp.com/send?phone=573206545520&text=Hola!%20Soy%20Daniel%20Pineda%20Enviame%20un%20Mensaje%20y%20Te%20Respondere%20Lo%20Mas%20Rapido%20Posible!%20" target='_blank' class="text-primary"><img src={cellb} className='' width='28' /> --> Numero Mobil  (+57) 3013700505</a>
                                        </li>
                                        <li>
                                            <a href="https://api.whatsapp.com/send?phone=573206545520&text=Hola!%20Soy%20Daniel%20Pineda%20Enviame%20un%20Mensaje%20y%20Te%20Respondere%20Lo%20Mas%20Rapido%20Posible!%20" target='_blank' class="text-primary"><img src={cell2b} className='' width='28' /> --> Numero Mobil (+57) 3206545520</a>
                                        </li>

                                    </ul >
                                    <h5 class="text-success"> Enviame un Mensaje Directo...! </h5>
                                    <ul class="list-unstyled">
                                        <li className="nav-item">
                                            <a className="btn btn-outline-light btn-contac bg-primary text-light" data-toggle="modal" data-target="#modalCompra" data-dismiss="modal">CONTACTAME!</a>
                                        </li>
                                    </ul>
                                </div>

                            </form>
                            <div className="alert alert-warning" role="alert">
                                Recibirás una Respuesta lo mas Pronto Posible :)
                </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn bg-success text-light" data-dismiss="modal">Listo</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default modal;