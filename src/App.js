import logo from './logo.svg';
import './App.css';
import './components/css/bootstrap.css';
import { createContext,useState } from 'react';
import pic1 from './images/logo plus.jpg';
import Sidebar from './components/Sidebar';
import Carousel from './components/Carousel';
import Products from './components/Products';
import Products2 from './components/Products2';
import Forms from './components/Forms';
import Table from './components/Table';
function App() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row bg-white'>
        <div className='col-md-2'>
          <img id='logo1' src={pic1} />
        </div>
        <div className='col-md-5'>
          <input type='text' className='in' placeholder='     Serach for products and More..'/>
          <i class=" search fa-solid fa-magnifying-glass"></i>
        </div>
        <div className='col-md-5 float-end'>
          <ul>
            <li><i class="fa-solid fa-people-carry-box"></i>Become a seller</li>
            <li><i class="fa-solid fa-user"></i>Anvitha</li>
            <li><i class="fa-solid fa-cart-plus"></i>Cart</li>
            <li><i class="fa-solid fa-ellipsis-vertical"></i></li>
          </ul>
        </div>
      </div>
      <Sidebar/>
      <Carousel/>
      <div className='row'>
      <Products/>
      </div>
      <div className='row'>
      <Forms/>
      </div>
      <div className='row'>
      <Table />
      </div>
    </div>
    </>
  );
}

export default App;
