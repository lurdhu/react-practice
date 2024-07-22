import React, { useEffect, useState } from 'react'
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


function Cart() {

    const { cart, setCart } = useContext(cartContext);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0))
    }, [cart]);


    function remove(index){
            let cart1=[...cart];
            cart1.splice(index,1);
            setCart(cart1);
    }

    return (
        <>
            <div className='flex gap-10 flex-wrap justify-center mt-10 mb-10'>
                {
                    cart.map((item,index) => {
                        return (
                            <>
                                <div className='border'>
                                    <img src={imageMap[item.pic]} alt={item.name} className='w-64 h-44 rounded-sm' />
                                    <div className='p-4 flex flex-col gap-2'>
                                        <p className='text-lg font-bold'>Name:{item.name}</p>
                                        <p className='text-sm text-gray-500'>Price:{item.price}</p>
                                        <button className='bg-red-600 py-2 px-5 text-white rounded-lg mr-auto hover:bg-red-700' onClick={()=>remove(index)}>Remove from cart</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <p className='text-xl font-bold'>Total Amount: {total == 0 ? "No Item is selected the amount is 0" : total}</p>
        </>
    )
}

export default Cart;

