import React from 'react';
import './App.css';
import Hero from './componets/Hero';
import Nav from './componets/Nav';
import About from './componets/About';
import Projects from './componets/Projects';
import Contact from './componets/Contact';
import Skills from './componets/Skills';
import Header from './componets/Header';
import Footer from './componets/Footer';


class App extends React.Component {
  

render() {
  
  return (
    <div className="App">
      <Nav />
      
      <Header />
      <nav>

        <Hero />
      </nav>

      <main>
        <About />

        <Skills />
          
        <Projects />
      </main>

      <section>
        <Contact />
      </section>
      
      <Footer />
    </div>
    );
  }
}
export default App;
