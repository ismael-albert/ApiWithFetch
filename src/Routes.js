import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Github from './pages/Github'
import Home from './pages/Home'
import Blog from './pages/Blog'
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
                <Blog/>
            </Route>
        </Switch>

    )
}