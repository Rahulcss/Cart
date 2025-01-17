import React from 'react'
import { Link } from'react-router-dom'
import { useSelector } from 'react-redux';
function NavBar() {
  const items = useSelector(state => state.cart);
  console.log(items);
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <span classNam='logo'>Redux Store</span>
        <div>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink'to="/cart">Cart</Link>
            <span className='cartCount'>Cart Items : {items.length}</span>
        </div>
    </div>
  )
}

export default NavBar; 