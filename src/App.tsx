import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Index from './pages/Index';
import BlogInfo from './pages/BlogInfo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog/:id/info' element={<BlogInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
