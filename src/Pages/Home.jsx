import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import wcaredoctor from '../assets/images/we-care-doctor.jpg'

export default function Home() {
  return (
    <div>
      <Navbar/>

      <div className='home-body'>

        {/* div1 */}
        <div>
          <h2>Protect Your Health And Take Care Of Your Health.</h2>
          <div>
            <div>
              <img src="" alt="" />
              <div>
                <h4>Make An Appolntment</h4>
                <p>Schedule With Your Favorite Doctor AnyTime</p>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h4>Health Guarantee Forever</h4>
                <p>We Always Provide The Best Warranty For You</p>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h4>Find Your Best Doctor</h4>
                <p>We Always Provide The Best Warranty For You</p>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h4>Spread In Various Places</h4>
                <p>Now Clinics Are Avoilable In Various Places</p>
              </div>
            </div>
          </div>
          <button>Book Now</button>
        </div>

        {/* dev2 */}
        <div>
          <img src={wcaredoctor} alt="" />
        </div>
      </div>
    </div>
  )
}
