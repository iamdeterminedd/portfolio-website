import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import './styles.css';
import Credits from './components/Credits';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
