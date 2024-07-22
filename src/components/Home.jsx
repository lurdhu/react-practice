import React, { useState } from 'react';
import data from '../assets/product.json';
import Products from './Products';



function Home() {

    const [products, setProduct] = useState(data);

    return (
        <>

        <div className='flex gap-10 flex-wrap justify-center mt-10 mb-10'>
            {
                products.map((product)=>{
                  return (
                    <>
                      <Products product={product} />
                    </>
                  )
                })
            }
        </div>
        </>
    );
}

export default Home;
