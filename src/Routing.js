import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import API from './components/API'
import Contact from './components/Contact'
import Counter from './components/Counter'
import Home from './components/Home'
import Search from './components/Search'

const Routing = () => {
    return (
        <Router>
            <div className="navbar">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/api">API</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                    </ul>
                </nav>
            </div>

            <Switch>
                <Route path="/api">
                    <API/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/search">
                    <Search/>
                </Route>
                <Route path="/counter">
                    <Counter/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>


        </Router>
    )
}


export default Routing