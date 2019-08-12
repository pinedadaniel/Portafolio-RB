import React from 'react';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkdin.svg';
import phoneb from '../images/phoneblack.svg';
import gmail from '../images/gmail.svg';
import facebook from '../images/facebook.svg';
import whatsapp from '../images/whatsapp.png';


class modal extends React.Component {
    render() {
        return (
            <div className="modal fade" id="modalCompra2" tabIndex="-1" role="dialog" aria-labelledby="modalCompraTitle" aria-hidden="true">
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
                                <div className="col-3">
                               <a href="https://twitter.com/Daniel30953516" target='_blank'>  <img src={twitter} width='64'/> Twitter</a>
                                </div>
                                <div className="col-3">
                                <a href="https://www.linkedin.com/in/daniel-pineda-36b7a618b/" target='_blank'> <img src={linkedin} width='64'/> Linkdin</a> 
                                </div>
                            
                                <div className="col-3">
                                <a href="https://api.whatsapp.com/send?phone=573206545520&text=Hola!%20Soy%20Daniel%20Pineda%20Enviame%20un%20Mensaje%20y%20Te%20Respondere%20Lo%20Mas%20Rapido%20Posible!%20" target='_blank'><img src={whatsapp} width='64'/> whatsapp</a> 
                                </div>
                                <div className="col-3">
                                <a href="https://www.facebook.com/kevindaniel.pineda.79" target='_blank'>  <img src={facebook} width='64'/>Facebook</a> 
                                </div>
                                
                                
                                                               </div>


                            </form>
                            <div className='col-12  mt-2 mb-1 '>
                                <a className="btn btn-outline-light btn-contac bg-primary text-light w-100" data-toggle="modal" data-target="#modalCompra" data-dismiss="modal">Enviame un Mensaje Directo!</a>
                                </div>
                            <div className="alert alert-warning" role="alert">
                                Recibirás una Respuesta lo mas Pronto Posible :)
                                </div>
                                
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn bg-success text-light"data-dismiss="modal">Listo</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default modal;