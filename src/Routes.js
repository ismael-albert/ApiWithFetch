import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Github from './pages/Github'
import Home from './pages/Home'
export default function() {

    return (
        <Switch>
            <Route exact path="/">
               <Home/>
            </Route>
            <Route exact path="/github">
               <Github/>
            </Route>

            <Route exact path="/blog">
                Pagina1111
            </Route>
        </Switch>

    )
}