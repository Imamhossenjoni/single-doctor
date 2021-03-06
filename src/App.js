import React from 'react';
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
import PrivatePage from './Pages/PrivatePage/PrivatePage';
import Details from './Pages/PrivatePage/Details/Details';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound';
import Footer from './Pages/Footer/Footer';

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
        <Route path='/service/:serviceId' element={<PrivatePage></PrivatePage>}></Route>
        <Route path='/cheakOut' element={
          <RequireAuth>
            <Details></Details>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
