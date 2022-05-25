import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './Context'

export default function Nav() {
    const [state, dispatch] = useContext(CartContext)
    return (
        <div className='nav'>
            <Link to='/'><p style={{ fontSize: 30 }}>Logo </p></Link>
            <Link to='/cart'><p style={{ fontSize: 20 }}>Cart : {state.length} </p></Link>
        </div>
    )
}
