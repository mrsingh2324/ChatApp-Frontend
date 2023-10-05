import './App.css';
import Home from './components/home.js';
import {Routes, Route} from 'react-router-dom';
import LocalLogin from './components/LocalLogin';


function App() {
  return (
    <div className="App bg-gray-950 h-screen flex w-screen text-white">
      <Routes>
        <Route path='/' element={<LocalLogin />} />
        <Route path='/chat' element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
