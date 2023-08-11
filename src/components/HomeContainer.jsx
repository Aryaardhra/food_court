import React from 'react'
import { heroData } from '../utils/data'

const HomeContainer = () => {
  return (
    
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full overflow-x-hidden"id="home">
     <div className="py-2 flex-1 flex flex-col items-start md:items-start justify-center gap-6 ">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-orange-950"> Bike Delivery</p>
           <div className="w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl">
             <img src = "./img/delivery.png"
               className="w-full h-full object-contain"
               alt="delivery"
               />
           </div>
        </div>

        <p className="text-[2rem]  lg:text-[3rem] font-bold 
            tracking-wide text-headingColor">
              The Fastest Delivery in 
          <span className="text-orange-900 text-[2rem] lg:text-[4rem]"> Your City</span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum autem facere nemo eius temporibus enim corporis non voluptates
             officia animi quia numquam incidunt, iure officiis ipsa laudantium magni eos quae!
         </p>

         <button type="button" className="bg-gradient-to-br from-orange-400 to-orange-500
            w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
                Order Now
        </button>
        </div>

    <div className="py-2 flex-1 flex items-center relative">
            <img src="./img/heroBg.png"  className=" ml-auto h-400 w-full lg:w-auto lg:h-650"alt="herobg"/>
        <div className="w-full h-full absolute flex items-center justify-center lg:px-29 py-4 gap-4 flex-wrap">

             { heroData && heroData.map(n => (

                     <div key={n.id} className=" lg:w-190  p-4 bg-cardOverlay backdrop-blur-md 
                     rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
                      <img src= {n.imageSrc} alt={n.name} className=" w-20 lg:w-36  -mt-10 lg:-mt-20"/>
                      <p className=' text-base lg:text-xl mt-2 lg:mt-4'>{n.name}</p>
                      <p className="text-[14px] lg:text-sm text-gray-500 my-3"> {n.decp}</p>
                      <p className="text-sm font-semibold text-headingColor">
                         <span className="text-xs text-red-600">$</span>{n.price}
                      </p>
                     </div>
             ))}
        </div>
    </div>
</section>

  )
}

export default HomeContainer