import './App.scss';

import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import MyNav from './components/Navbar/Navbar';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

function App() {
  return (
    <Container className='p-3'>
      <MyNav />
      <Routes>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/skills' element={<Skills />} />
      </Routes>
      <About />
      <Projects />
    </Container>
  );
}

export default App;
