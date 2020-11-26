import React from 'react';
import {  BrowserRouter, Route, Switch, Redirect } from 'react-router-dom' 
import ROUTES from '../src/constants/routes'
import './App.css';
import Menu from './views/Menu'
import '../src/firebase'
import Kitchen from './views/kitche';
import Welcome from './views/Welcome';
 

function App() {
  return (
     <div >
    {/* <Menu></Menu> */}
     
           
        
    
        <BrowserRouter> 
             
            <div> 
                <Redirect
                    from="/"
                    to={ROUTES.welcome}   
                    />
                <Switch>
                  <Route
                    exact
                    path={ ROUTES.welcome}
                    component={Welcome}  
                />
                              
                    <Route
                         exact
                         path={ROUTES.menu}
                         component={Menu} />
                     <Route
                         exact
                         path={ROUTES.kitchen}
                         component={Kitchen} />
                     
                </Switch>        
            </div>
            
        </BrowserRouter>
         
        
    </div>
  );
}

export default App;
