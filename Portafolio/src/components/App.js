import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../Pages/MainComponent.js';
import About from '../Pages/AboutComponent.js';
//import Home from '../Pages/MainComponent.js';

//importamoos las paginas
const App = () => {
    return (
        
        <BrowserRouter>     
              <Layout>
                <Switch>
                    <Route exact path = "/" component={Home} />
                    <Route exact path = "/About" component={About} />
               
                </Switch> 
            </Layout>  

         
               
        </BrowserRouter>
    );
}
export default App;
