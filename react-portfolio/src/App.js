import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App
