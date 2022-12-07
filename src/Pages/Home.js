import React from 'react-pdf'
import "../Pages/style.css"

import pic from '../Pages/Developer_pic.jpg'
import Preeti1 from "../Pages/Preeti1.pdf"




const Home = () => {
  return (
    <div >
      <container className="Bio">
     <h1 className='font'>Hi,</h1>
     <h1 className='font'>I Am PREETI CHAUHAN</h1>
     <h1 className='font'>Full Stack Developer</h1>
     <h2 className='font1'>I Build Things for Web !!</h2>
   
     <button classame='resume'><a  style={{textDecoration:"none",color:"white",}} href={Preeti1} download={Preeti1}>Download Resume</a></button>

     </container>
     <img className='my_pic' src={pic} alt="Nothing--04" />
    </div>
  )
}
export default Home
