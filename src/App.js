import React, { Fragment } from 'react';
import './App.css';
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

const App = () => (
  <div className={`app`}>
    <Header/>
    <Content/>
    <Footer/>
  </div>
);

export default App;
