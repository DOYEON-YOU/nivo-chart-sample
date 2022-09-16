import './styles/css/common.css'
import Nivo from './Charts/Nivo';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Nivo/>}/>
      </Routes>
    </div>
  );
}

export default App;
