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
import DragAndDrop from './components/Drag&Drop/DragAndDrop'
import Home from './components/Home'
import LocalStorage from './components/LocalStorage'
import Redux from './components/Redux/Redux'
import Search from './components/Search'
import UploadImage from './components/UploadImage'
import UseContext from './components/hooks/UseContext'
import UseReducer from './components/hooks/UseReducer'
import GlobalContext from './components/hooks/GlobalContext'
import DataFetching from './components/hooks/DataFetching'


export const Context = React.createContext();
export const AgeContext = React.createContext();

const Routing = () => {

    return (

        <Context.Provider value={"Debjit"}>
            <AgeContext.Provider value={"34"}>

                <Router>
                    <div className="navbar">
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/api">API</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/search">Search</Link></li>
                                <li><Link to="/counter">Counter</Link></li>
                                <li><Link to="/localstorage">LocalStorage</Link></li>
                                <li><Link to="/redux">Redux</Link></li>
                                <li><Link to="/draganddrop">Drag & Drop</Link></li>
                                <li><Link to="/uploadimage">Upload Image</Link></li>
                                <li><Link to="/useContext">Use Context</Link></li>
                                <li><Link to="/useReducer">Use Reducer</Link></li>
                                <li><Link to="/globalcontext">GlobalContext</Link></li>
                                <li><Link to="/datafetching">Data Fetching</Link></li>
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
                        <Route path="/localstorage">
                            <LocalStorage/>
                        </Route>
                        <Route path="/redux">
                            <Redux/>
                        </Route>
                        <Route path="/draganddrop">
                            <DragAndDrop/>
                        </Route>
                        <Route path="/uploadimage">
                            <UploadImage/>
                        </Route>
                        <Route path="/useContext">
                            <UseContext />
                        </Route>
                        <Route path="/useReducer">
                            <UseReducer/>
                        </Route>
                        <Route path="/globalcontext">
                            <GlobalContext />
                        </Route>
                        <Route path="/datafetching">
                            <DataFetching />
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>


                </Router>
            </AgeContext.Provider>

        </Context.Provider>
    )
}


export default Routing
