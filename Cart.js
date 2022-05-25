
import React, { useContext } from 'react'
import { CartContext } from './Context'

export default function Cart() {
    const [state, dispatch] = useContext(CartContext)




    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id } })
    }

    return (
        <div>
            {
                state.length <= 0

                    ?

                    <div className='noitem'>
                        <p>NO ITEM</p>
                    </div>

                    :

                    <div>
                        <>
                            {
                                state.map(data => (
                                    <div className="cartStyle" key={data.id}>
                                        <div className="cartFlexStyle">
                                            <img src={data.img} className="cartImg" />
                                            <div className='textDiv'>
                                                <p className=''>{data.name}</p>
                                                <p>{data.price}</p>
                                                <div>
                                                    <button className='plusbtn'>+</button>
                                                    <button className='plusbtn'>-</button>
                                                </div>

                                            </div>
                                            <div>
                                                <button className='btn' onClick={() => removeFromCart(data.id)}  >Remove from cart</button>
                                            </div>
                                        </div>


                                    </div>
                                ))
                            }

                        </>



                    </div>
            }
        </div>
    )
}


