import React, { Suspense }from "react";
import { Switch,Route } from "react-router-dom";

import NavBar from './components/views/nav/NavBar'
import LandingPage from "./components/views/LanddingPage"
import AboutPage from "./components/views/AboutPage"

function App() {
  return (
    <Suspense fallback={(<div>Loding...</div>)}>
      <NavBar/>
    <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
      
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/react-portfolio" component = {LandingPage} />
        <Route exact path="/react-portfolio/about" component = {AboutPage} />
      </Switch>
    </div>

  </Suspense>

);
}


export default App;
