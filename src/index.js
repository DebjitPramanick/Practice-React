import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from "./components/Redux/Store"
import './index.css'
import Routing from './Routing';


function Practice(){

  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
    
  )
}


ReactDOM.render(<Practice/>,document.getElementById('root'));
