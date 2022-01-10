import Aboutme from './Aboutme';
import './App.css';
import Home from './Home.js';
import Skills from './skills.js';
import Projects from './projects.js';
import Contact from './Contact.js';

function App() {
  return (
    <div className="App">
      <Home />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
