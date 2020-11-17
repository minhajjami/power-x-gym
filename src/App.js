import React from "react";
import MembershipForm from "./components/form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pricing from "./components/service/Pricing/Pricing";
import OurClasses from "./components/service/OurClasses/OurClasses";
import AdvanceGym from "./components/service/AdvanceGym/AdvanceGym";
import Navbar from "./components/HomePage/Navbar/Navbar";
import Feature from "./components/HomePage/Feature/Feature";
import AboutUs from "./components/HomePage/AboutUs/AboutUs";
import TrainingSession from "./components/HomePage/TrainingSession/TrainingSession";
import ChooseUs from "./components/HomePage/ChooseUs/ChooseUs";
import Footer from "./components/HomePage/Footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/form">
            <MembershipForm />
          </Route>
          <Route path="/ourclasses">
            <OurClasses />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/advanceGym">
            <AdvanceGym />
          </Route>

          <Route path="/">
            <Navbar />
            <Feature />
            <AboutUs />
            <TrainingSession />
            <ChooseUs />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>


export default App;
