import React from 'react'
import Feature from '../components/Feature'
import app from "../assets/appointment.png"
import book from "../assets/inventory.png"

const About = () => {
  return (
    <div className='relative top-[50px] h-[350px]' id='about'>

      <div className='flex justify-around mx-4'>

        <Feature 
          logo = {app}
          title = "Generator Inventory"
          description = "Display a wide range of generators available for rent, including different power capacities, 
                        types (portable, standby, etc.),
                        and fuel options (gasoline, diesel, etc.)."
        />

        <Feature 
          logo = {app}
          title = "Generator Inventory"
          description = "Display a wide range of generators available for rent, including different power capacities, 
                        types (portable, standby, etc.),
                        and fuel options (gasoline, diesel, etc.)."
        />

        <Feature 
          logo = {app}
          title = "Generator Inventory"
          description = "Display a wide range of generators available for rent, including different power capacities, 
                        types (portable, standby, etc.),
                        and fuel options (gasoline, diesel, etc.)."
        />
      </div>
      
    </div>
  )
}

export default About