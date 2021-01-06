import React, { Suspense }from "react";
import { Switch,Route } from "react-router-dom";


import LandingPage from "./components/views/LandingPage/LandingPage"


function App() {
  return (
    <Suspense fallback={(<div>Loding...</div>)}>
    
    <div>  
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        {/* <Route exact path="/react-portfolio" component = {LandingPage} /> */}
        <Route exact path="/react-portfolio" component = {LandingPage} />
      </Switch>
    </div>

  </Suspense>

);
}


export default App;
