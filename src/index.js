
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";

import AppRouter from './Router'



const App = () => {
  //INITIAL STORE VARIABLES
  const defaultStore = {
    authenticated: false,
  }
  //IF COOKIE / LOCAL STORAGE CHANGE AUTHENTICATED
  console.log(localStorage.getItem('Auth_token'))
  if(localStorage.getItem('Auth_token')){
    defaultStore.authenticated = true
  }
  //CREATE A SIMPLE STORE
  const [store, setStore] = useState(defaultStore)

  return (
    <React.Fragment>
      {/* PASS THE STORE AND SETSSTORE TO ROUTER TO PASS TO ALL PAGES  */}
        <AppRouter  {...store} setStore={setStore} />
    </React.Fragment>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
);
