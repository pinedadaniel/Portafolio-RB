import React from 'react';
import NavBar from '../components/NavbarComponent';
import Main from '../components/MainComponent';

const Layout = (props) =>{
    return(
        <React.Fragment>
            <NavBar/>
            <Main/>
            {props.children}
        </React.Fragment>
    )

}

export default Layout;