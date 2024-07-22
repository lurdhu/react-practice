import React from 'react';
import food1 from '../assets/Images/food-1.jpg';
import food2 from '../assets/Images/food-2.jpg';
import food3 from '../assets/Images/food-3.jpg';
import food4 from '../assets/Images/food-4.jpg';
import { useContext } from 'react';
import { cartContext } from '../App';


const imageMap = {
    food1,
    food2,
    food3,
    food4
};

function Products({ product }) {

    const {cart,setCart} = useContext(cartContext);

    const addCart = () =>{
        setCart([...cart,product])
    }

    function removeCart(){
        setCart(cart.filter((c)=>c.id !== product.id))  // if the values is true it will give a new array and return the new array 
    }

    return (
        <>
            <div className=''>
                <div className='border rounded-sm shadow-md'>
                    <img src={imageMap[product.pic]} alt={product.name} className='w-64 h-44 rounded-sm' />
                    <div className='p-4 flex flex-col gap-3'>
                        <p className='text-lg font-bold'>Name: {product.name}</p>
                        <p className='text-sm text-gray-500'>Price: {product.price}</p>
                      {
                        cart.includes(product) ?
                        <button className='bg-red-600 py-2 px-5 text-white rounded-lg mr-auto hover:bg-red-700' onClick={removeCart}>Remove from Cart</button>
                        :<button className='bg-teal-600 py-2 px-5 text-white rounded-lg mr-auto hover:bg-teal-700' onClick={addCart} >Add to Cart</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;