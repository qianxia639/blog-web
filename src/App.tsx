import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Index from './pages/Index';
import BlogInfo from './pages/blog/BlogInfo';
import Type from './pages/type/Type';
import Archive from './pages/Archive';
import BlogEdit from './pages/blog/BlogEdit';
import User from './pages/admin/User';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/blog/:id/info' element={<BlogInfo />} />
          <Route path='/type' element={<Type />} />
          <Route path='/edit' element={<BlogEdit />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/admin/user' element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
