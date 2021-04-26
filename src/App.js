import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
<link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/code-new-roman" type="text/css" />;

class App extends Component {

  render() {

    const name = 'Tucker';

    return (
      <div className="App">

        <Header />

        Hello{name};

        <Footer />

      </div>
    );
  }

}

export default App;
