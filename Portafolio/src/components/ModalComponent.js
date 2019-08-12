import React from 'react';


class modal extends React.Component{
    render(){
    return  (
        <div className="modal fade" id="modalCompra" tabIndex="-1" role="dialog" aria-labelledby="modalCompraTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title text-warning" id="modalCompraTitle">¡Enviame un Mensaje!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form action="">
                    <div className="form-row">
                        <div className="form-group col-lg-12">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf_CBeS8HjMnwYEoGH97IPgm-lezeHCvcEUiVx6Xmmdp9KmLQ/viewform?embedded=true" width="100%" height="250" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>


                        </div>
                    </div>                   
                </form>
                <div className="alert alert-warning" role="alert">
                    Recibirás un correo de respuesta lo mas pronto posible
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-success" data-dismiss="modal" >Listo</button>
            </div>
            </div>
        </div>
        </div>

    );
}
}

export default modal;