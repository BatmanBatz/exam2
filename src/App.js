import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './container/home';
import Wrap1 from './components/wrap1';
import Wrap2 from './components/wrap2';
import Wrap3 from './components/wrap3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/1' element={<Wrap1/>}/>
        <Route path='/2' element={<Wrap2/>}/>
        <Route path='/3' element={<Wrap3/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
