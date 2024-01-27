import React from 'react'
import '../componnets/Card.css'
import Csk from '../assests/CSK-Logo.png'
import Mumbai from "../assests/Mumbai-Indians-logo.png"
import Srh from "../assests/SRH-team-logo.png"
import Rcb from "../assests/Royal-Challengers-Bangalore-Logo.png"
import Punjab from "../assests/Punjab-Kings.png"
const Card = () => {
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
    <div className='upc'>
    <div className='gradiant'>
        <div className='gradiant'> </div>
        <div className='profile-down'>
            <img src={Csk} alt=""/>
            <div className='profile-title'>CSK</div>
            <div className='profile-description'>
January 19, 2024 Nishant Sindhu scores ton against Manipur Super King and left-handed
                </div>

        </div>
        <div className='profile-button'><a href="ganapammahendra28@gmail.com">CONTACT ME </a>
                
                </div>
    </div>
      
    </div>

    <div className='upc'>
    <div className='gradiant'>
        <div className='gradiant'> </div>
        <div className='profile-down'>
            <img src={Mumbai} alt=""/>
            <div className='profile-title'>Mumbai</div>
            <div className='profile-description'>
January 19, 2024 Nishant Sindhu scores ton against Manipur Super King and left-handed
                </div>

        </div>
        <div className='profile-button'><a href="ganapammahendra28@gmail.com">CONTACT ME </a>
                
                </div>
    </div>
      
    </div>

    <div className='upc'>
    <div className='gradiant'>
        <div className='gradiant'> </div>
        <div className='profile-down' style={{marginLeft:"30px", marginTop:"-20px"}}>
            <img src={Srh} alt=""/>
            <div className='profile-title'>Srh</div>
            <div className='profile-description'>
January 19, 2024 Nishant Sindhu scores ton against Manipur Super King and left-handed
                </div>

        </div>
        <div className='profile-button'><a href="ganapammahendra28@gmail.com">CONTACT ME </a>
                
                </div>
    </div>
      
    </div>

    <div className='upc'>
    <div className='gradiant'>
        <div className='gradiant'> </div>
        <div className='profile-down' style={{marginLeft:"60px"}}>
            <img src={Rcb} alt=""/>
            <div className='profile-title' style={{marginLeft:"90px"}}>Rcb</div>
            <div className='profile-description'>
January 19, 2024 Nishant Sindhu scores ton against Manipur Super King and left-handed
                </div>

        </div>
        <div className='profile-button'><a href="ganapammahendra28@gmail.com">CONTACT ME </a>
                
                </div>
    </div>
      
    </div>

    <div className='upc'>
    <div className='gradiant'>
        <div className='gradiant'> </div>
        <div className='profile-down'>
            <img src={Punjab} alt=""/>
            <div className='profile-title'>Punjab</div>
            <div className='profile-description'>
January 19, 2024 Nishant Sindhu scores ton against Manipur Super King and left-handed
                </div>

        </div>
        <div className='profile-button'><a href="ganapammahendra28@gmail.com">CONTACT ME </a>
                
                </div>
    </div>
      
    </div>

    </div>
  )
}

export default Card
