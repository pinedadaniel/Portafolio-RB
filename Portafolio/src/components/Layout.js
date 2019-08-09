import React from 'react';
import NavBar from '../components/NavbarComponent';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Layout = (props) =>{
    return(
        <React.Fragment>
            <NavBar/>
            {props.children}
           
        </React.Fragment>
    )

}

export default Layout;