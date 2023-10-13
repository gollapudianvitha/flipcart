import React from 'react'
import pic2 from '../images/top offers.png';
import pic3 from '../images/mobiles.webp';
import pic4 from '../images/electronics.webp';
import pic5 from '../images/tv and appliances.webp';
import pic6 from '../images/fashion.webp';
import pic7 from '../images/beauty.webp';
import pic8 from '../images/Home and kitchen.webp';
import pic9 from '../images/Furniture.webp';
import pic10 from '../images/Flights.webp';
import pic11 from '../images/Grocery.webp';
export default function Sidebar() {
  return (
    <>
     <div className='row content1'>
        <ul>
          <li><img src={pic2}/></li>
          <li><img src={pic3}/></li>
          <li><img src={pic4}/></li>
          <li><img src={pic5}/></li>
          <li><img src={pic6}/></li>
          <li><img src={pic7}/></li>
          <li><img src={pic8}/></li>
          <li><img src={pic9}/></li>
          <li><img src={pic10}/></li>
          <li><img src={pic11}/></li>
        </ul>
      </div>
    </>
  )
}
