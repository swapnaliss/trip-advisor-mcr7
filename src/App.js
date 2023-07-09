import './App.css';
import Continents from './components/Continents';
import 'bootstrap/dist/css/bootstrap.min.css';
import Country from './components/Country';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
    <Container>
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/country/:id" element={<Country />} />
      </Routes>
    </Container>
  </Router>
  );
}

export default App;
