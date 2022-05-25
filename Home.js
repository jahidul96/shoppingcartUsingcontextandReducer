import React, { useContext } from 'react'
import { CartContext } from './Context'

import { products } from './data'



export default function Home() {
    const [state, dispatch] = useContext(CartContext);


    let something = state.map(data => {
        return data.id
    })

    console.log(something)

    const addToCart = (product) => {

        dispatch({ type: "ADD_TO_CART", payload: product });

    }

    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id } })
    }

    return (
        <div>
            <div className='titleContainer'>
                <h2> Product's</h2>
            </div>

            <div className='productsContainer'>
                {
                    products.map(product => (
                        <div key={product.id} className="productWrapper">
                            <img src={product.img} className="imgStyle" />
                            <div className='detailsWrapper'>
                                <p className=''>{product.name}</p>
                                <p>{product.price}</p>
                            </div>

                            <div>
                                {
                                    something.includes(product.id) ? <button onClick={() => removeFromCart(product.id)} className='btn' >Remove From Cart</button> : <button onClick={() => addToCart(product)} className='btn' >Add to Cart</button>
                                }

                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
