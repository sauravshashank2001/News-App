import './App.css';
import React, { Componen, useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

const App =() => {
 const pageSize= 15;
  //render() {

    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route exact  path="/"> <News key="general" pageSize={pageSize} country='in' category="general"/></Route>
          <Route exact  path="/business"> <News key="buisness" pageSize={pageSize} country='in' category="business"/></Route>
          <Route exact  path="/entertainment"> <News key="entertainment" pageSize={pageSize} country='in' category="entertainment"/></Route>
          <Route exact  path="/general"> <News key="general" pageSize={pageSize} country='in' category="general"/></Route>
          <Route exact  path="/health"> <News key="health" pageSize={pageSize} country='in' category="health"/></Route>
          <Route exact  path="/science"> <News key="science" pageSize={pageSize} country='in' category="science"/></Route>
          <Route exact  path="/sports"> <News key="sports" pageSize={pageSize} country='in' category="sports"/></Route>
          <Route exact  path="/technology"> <News key="technology" pageSize={pageSize} country='in' category="technology"/></Route>
        </Switch>
       
      </div>
      </BrowserRouter>
    )
  }
//}
export default App;
