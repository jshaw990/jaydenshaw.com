import './App.css';

import Header from './components/header/header'
import Hero from './components/hero/hero'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Experience from './components/experience/experience'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
