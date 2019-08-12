import React from 'react';
import { Link } from 'react-router-dom';
import foto2 from '../images/foto2.jpg';
import foto3 from '../images/foto3.jpg';
import foto from '../images/foto.jpg';
import foto4 from '../images/foto4.jpg';
import diseño_web from '../images/diseno_web.jpg';
import store2 from '../images/store2.jpg';
import responsi from '../images/responsi.jpg';
import responsi1 from '../images/responsi1.png';
import solution from '../images/solution.jpg';
import gg from '../images/gg.jpg';
import "./styles/ProjectsStyle.css";
import fondo from '../images/bg.mp4';
class projects extends React.Component {

    render() {

        return (
            <React.Fragment>
               <video className='refreshVideo'  autoPlay muted loop id='miFondo'>
                    <source src={fondo} type='video/mp4' />
                </video>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                <div className='help'> 
                <div class="content-all">
            <div class="content-carrousel">
                <figure><img src={foto2}/></figure>
                <figure><img src={foto3}/></figure>
                <figure><img src={foto}/></figure>
                <figure><img src={foto4}/></figure>
                <figure><img src={diseño_web}/></figure>
                <figure><img src={store2}/></figure>
                <figure><img src={responsi}/></figure>
                <figure><img src={responsi1}/></figure>
                <figure><img src={solution}/></figure>
                <figure><img src={gg}/></figure>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
            </React.Fragment>

        );

    }
}
export default projects;