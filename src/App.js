import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './shared/pages/Home';
import About from './shared/pages/About';
import Surgeries from './shared/pages/Surgeries';
import Contact from './shared/pages/Contact';
import s from './style.module.scss';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';

class App extends Component {
  render() {

    const links = [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/surgeries/oncological', label: 'Oncological Surgeries' },
      { path: '/surgeries/soft-tissue', label: 'Soft-Tissue Surgeries' },
      { path: '/contact', label: 'Contact' },
    ];

    return (
      <>
        <Header></Header>
        <Home></Home>
        <Surgeries></Surgeries>
        <Surgeries></Surgeries>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
      </>
      // <Router>
      //   <div className={s.AppWrapper}>
      //     {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //       <ul className="navbar-nav mr-auto">
      //         {links.map((link, i) =>
      //           <li key={i}><Link to={link.path} className="nav-link">{link.label}</Link></li>)}
      //       </ul>
      //     </nav> */}
      //     <Switch>
      //       <Route path='/' exact component={Home} />
      //       <Route path='/About' component={About} />
      //       <Route path='/Surgeries/Oncological' component={Surgeries} />
      //       <Route path='/Surgeries/Soft-Tissue' component={Surgeries} />
      //       <Route path='/Contact' component={Contact} />
      //     </Switch>
      //   </div>
      // </Router>
    );
  }
}

export default App;
