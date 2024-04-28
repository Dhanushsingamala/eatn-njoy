import React from 'react'
import './App.css'



/** Planning before coding->
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -RestaurentContainer
 * Footer
 * -CopyRight
 * -Links
 * -Address
 * -Contact
 */



const Header = () => {
  return (
    <div className='Header'>
      <div className="Logo-Container">
        <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgqV9sezgYxiiPqaJ3NXXvwDbkzgXpCeBWQ&s" alt="Logo" />
      </div>

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default AppLayout