import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../Pages/MainComponent.js';
import About from '../Pages/AboutComponent.js';
import Services from '../Pages/ServicesComponent.js';
import projects from '../Pages/projectsComponent.js';
//import Home from '../Pages/MainComponent.js';

//importamoos las paginas
const App = () => {
    return (
        
        <BrowserRouter>     
              <Layout>
                <Switch>
                    <Route exact path = "/" component={Home} />
                    <Route exact path = "/About" component={About} />
                    <Route exact path = "/Services" component={Services} />
                    <Route exact path = "/Projects" component={projects} />
                </Switch> 
            </Layout>  

         
               
        </BrowserRouter>
    );
}
export default App;
