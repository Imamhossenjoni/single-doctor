import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Banner from './Pages/Home/Banner/Banner';
import Service from './Pages/Home/Service/Service';
import Services from './Pages/Home/Services/Services';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Blog from './Blog/Blog';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
