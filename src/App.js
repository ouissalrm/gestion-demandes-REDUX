import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ListeDemandes from './config/components/ListeDemandes';

function App() {
  return (
    <div className="App">
      <h1>Gestion demandes de  formations Qualifiantes</h1>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<ListeDemandes />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
