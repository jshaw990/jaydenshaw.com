import './App.css';

import Header from './components/header/header'
import Skills from './components/skills/skills'
import Experience from './components/experience/experience'
import Footer from './components/footer/footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, far)

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
