import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className='bg-black text-white flex p-5 justify-between'>
                <div className='text-xl font-semibold'>Food Cart</div>
                <ul className='flex gap-6'>
                    <li className='text-lg hover:text-yellow-400'>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className='text-lg hover:text-yellow-400'>
                        <Link to={"/Cart"}>View Cart</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Header;