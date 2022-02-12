import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleUser from "./pages/SingleUser";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import TopUser from './components/TopUser'
import TopRepo from "./components/TopRepo";
function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
        <Navbar />
          <Home />
        </Route>
        <Route path="/about">
        <Navbar />
          <About />
        </Route>
        <Route path="/top">
          <Navbar />
          <TopUser />
        </Route>
        <Route path="/repo">
          <Navbar />
          <TopRepo />
        </Route>
        <Route path="/user/:name">
        <Navbar />
          <SingleUser />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
