import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Componets/Navbar';

const Home = () => <h1 className="text-center text-3xl mt-5">Welcome to Home</h1>;
const Class = () => <h1 className="text-center text-3xl mt-5">Class Page</h1>;
const Subject = () => <h1 className="text-center text-3xl mt-5">Subject Page</h1>;
const Data = () => <h1 className="text-center text-3xl mt-5">Data Page</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class" element={<Class />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </Router>
  );
}

export default App;
