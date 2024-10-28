import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json';
function Price() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-20 items-center justify-center text-center">
            <h1 className="text-2xl font-semibold md:text-4xl pt-8">We're delighted to have you here!</h1>
            <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Qui animi autem quia ad dignissimos cum modi asperiores a similique, minus maiores molestiae!</p>
            </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>

    </div>
    </>
  )
}

export default Price;
