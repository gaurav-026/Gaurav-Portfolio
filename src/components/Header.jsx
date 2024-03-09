import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <Link className='text1' to='/'>Gaurav Chakrawarti</Link>
      <div>
        
        <Link to='/worksamples' className='text2'>Work Samples</Link>
        <Link to='profile' className='text2'>Profile</Link>
      </div>
    </nav>

  )
}

export default Header
