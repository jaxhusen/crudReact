import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Link to="/" style={{textDecoration: 'none',color: 'black', fontWeight: 'bold', fontSize: 'large', textTransform: 'uppercase' }}> Get One </Link>    
        |<Link to="/GetAll" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: 'large', textTransform: 'uppercase' }}> Get All </Link>   
        |<Link to="/CreateOne" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: 'large', textTransform: 'uppercase' }}> Create One </Link>
        <br/>
    </div>
  )
}

export default Header