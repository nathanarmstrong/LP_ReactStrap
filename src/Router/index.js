import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// ROUTES URL
import {
  POST_URL,
  DASHBOARD_URL,
  LOGIN_URL,
  LOGOUT_URL
} from '../urls';
//IMPORT ALL PAGES
import Index from '../views/Index'
import Dashboard from '../views/Dashboard/index.js'
import ViewPost from "../views/Posts/ViewPost/index.js";


//IMPORT NAV / FOOTER
import NavBar from '../components/Navbars/NavBar.js'
import Footer from '../components/Footers/Footer.js'
import {HOME_URL} from '../urls'
const AppRouter = (store) => {

  // SET FOR AUTHENTICATED ROUTES TO REDIRECT IF USE NOT LOGGED IN (CHECKING THE STORE/PROPS)
  const RequireAuth = ({children}) => {
    if (!store.authenticated) {
      return <Redirect to={HOME_URL} />;
    }
    return children;
  };


  // ONLY TO FAKE A LOGIN (REMOVE AFTER)
  const FakeLogin = (props) =>{
    console.log(props,"FAKE LOGIN")
    //CHANGE STORE TO SET AUTHENTICATION TRUE
    localStorage.setItem('Auth_token', 'uhdsfkjhsddkfjh2389y12h1k2hkjh')
    useEffect(()=>{
      props.store.setStore(prevState => ({
        ...prevState,
        authenticated: true
      }))
    },[])
    return(
      <Redirect to={HOME_URL} />
    )
  }
  // TO LOGOUT OF APPLICATION CALL THE LOGOUT URL
  const FakeLogout = (props) =>{
    localStorage.removeItem('Auth_token')
    useEffect(()=>{
      props.store.setStore(prevState => ({
        ...prevState,
        authenticated: false
      }))
    },[])
    return(
      <Redirect to={HOME_URL} />
    )
  }

  const RouteWithId = (string)=>{
    return string + ':id'
  }


  console.log(RouteWithId(POST_URL))

  return(
    <BrowserRouter>
      {/* IF AUTHENTICATED SHOW NAV BAR */}
      {store.authenticated &&
        <NavBar />
      }
      <Switch>
        <Route path={HOME_URL} exact render={props => <Index {...props} store={store} />} />
        <Route path={LOGIN_URL} exact render={props => <FakeLogin {...props} store={store} />} />
        <RequireAuth >
          <Route path={DASHBOARD_URL} exact render={props => <Dashboard {...props} store={store} />} />
          <Route path={LOGOUT_URL} exact render={props => <FakeLogout {...props} store={store} />} />
          <Route path={RouteWithId(POST_URL)} exact render={props => <ViewPost {...props} store={store} />} />
        </RequireAuth>
        <Redirect to={HOME_URL} />
      </Switch>
      {/* IF AUTHENTICATED SHOW FOOTER */}
      {store.authenticated &&
        <Footer />
      }
    </BrowserRouter>
  )
}

export default AppRouter;