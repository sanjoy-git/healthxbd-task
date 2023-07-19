import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
// import wcaredoctor from '../assets/images/we-care-doctor.jpg'
import { FaCalendarAlt,FaMapMarkerAlt } from "react-icons/fa";
import { FiPocket,FiUser } from "react-icons/fi";


const data=[
  {
    img:<FaCalendarAlt/>,
    title:'Make An Appolntment',
    text:'Schedule With Your Favorite Doctor AnyTime'
  },
  {
    img:<FiPocket/>,
    title:'Health Guarantee Forever',
    text:'We Always Provide The Best Warranty For You'
  },
  {
    img:<FiUser/>,
    title:'Find Your Best Doctor',
    text:'We Always Provide The Best Warranty For You'
  },
  {
    img:<FaMapMarkerAlt/>,
    title:'Spread In Various Places',
    text:'Now Clinics Are Avoilable In Various Places'
  },

]

export default function Home() {
  return (
    <div>
      <Navbar/>

      <div className='home-body'>

        {/* div1 */}
        <div className='text'>
          <h2>Protect Your Health And Take Care Of Your Health.</h2>
          <div className='text-child'>
            {data?.map(item=>{
              return(
                <div className='text-single'>
                  <span>{item.img}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <button className='book-now' onClick={()=>alert("Developing")}>Book Now</button>
        </div>

        {/* dev2 */}
        <div className='care-doctor'>
          {/* <img src={wcaredoctor} alt="" /> */}
        </div>
      </div>
      
      {/* under div */}
      <div className='under-div'>
        <div>
          <p>250</p>
          <span>Best Doctor</span>
        </div>
        <div>
          <p>15</p>
          <span>Clinic Location</span>
        </div>
        <div>
          <p>20</p>
          <span>Surgery Room</span>
        </div>
        <div>
          <p>+1500</p>
          <span>Patient Capacity</span>
        </div>
      </div>
    </div>
  )
}
