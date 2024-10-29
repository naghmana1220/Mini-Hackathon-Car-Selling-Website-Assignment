import React from 'react'
import Link from 'next/link'

export default function  Car1details  (){
    return (
        <div className="bg-emerald-100 border-solid border-2 border-slate-700 w-full h-auto">
             <h1 className="text-black pl-96  text-2xl "><u><strong>Tata Curvv EV 2024 Price In Pakistan , Features & <br />Specs</strong></u></h1>
     
             <div className="pl-44  items-center border-solid border-4 border-slate-500   bg-emerald-100 justify-center">
             <img  className="  h-44 shadow-2xl bg-red rounded-xl ml-80 mt-8 mb-4                     
              p-4 m-4 shadow-cyan-500 
              hover:scale-125 
              duration-150 ease-in-out   width={300}
              height={300}" 
              src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/184121/tata-curvv-ev-left-front-three-quarter23.jpeg?isig=0&wm=0" />
             <br />
             <hr />
             <div className="ml-40 mt-4">
             <button className=" text-white rounded-lg py-3 px-1  bg-blue-800 shadow-lg shadow-cyan-400/50  hover:scale-110 ">
              <a>Book a test Drive</a>
             </button>
             
             <button className="align-center bg-white text-blue-500 rounded-lg px-3 h-8 ml-51 ml-7 pb-8 pt-3 shadow-2xl shadow-cyan-500 hover:scale-110 border-solid border-2 border-sky-500 ... ">
              Request Bank Finance
             </button>

             <button className="align-center bg-white text-blue-500 rounded-lg px-3 h-8 ml-51 ml-7 pb-8 pt-3 shadow-2xl shadow-cyan-500 hover:scale-110 border-solid border-2 border-sky-500 ">
               Visit Place
             </button>
             
             <button className="align-center bg-white text-blue-500 rounded-lg px-3 h-8 ml-51 ml-7 pb-8 pt-3 shadow-2xl shadow-cyan-500 hover:scale-110 border-solid border-2 border-sky-500 ">
              Car  Inspection
             </button>
             </div>
             <br />
              <h1 className="text-black text-2xl ml-80 pl-10 mt-3"><u><strong>Vehicle  Description</strong></u></h1>
              <br />
              <div><b>Model Number:</b> Curvv EV 2024  <b>Available Colors:</b>Red, Green, Orange and Blue  <b>Body Type:</b> SUV
               <hr />
               <p><b>Engine Type:</b> Electric <b>Seating Capacity:</b>5 <b>No. of Doors4:</b> Doors</p></div>
               <br />
              <p className="text-black ">The Latest Tata Curvv EV 2024 Price in Pakistan updated on daily bases from the local market shops/Showrooms
               and price list provided by the dealers of Tata in PAK we are trying to delivering possible best and Cheap 
               Price/offers or deals of Tata Curvv EV 2024 in Pakistan and Full Specs, but we are cant grantee the information
               are 100% correct(human error is possible), All prices mentioned are in PKR and USD and valid all over the Pakistan 
               including Islamabad, Lahore, Karachi, Multan, Rawalpindi Slight deviations are expected.</p>
               <br />
               <h1 className="text-green-600 text-2xl ml-44 text-start pl-48 pb-3">PKR   8,310,000</h1>
               <div className="ml-80 pl-20 pt-2 pb-2 ">
               <Link href="/Forms">
              <button className="bg-blue-900 text-white rounded-lg py-3 px-1 shadow-2xl shadow-blue-500 border-solid border-2 border-black">
                Make Payment
               </button>
               </Link> 
               </div>
               </div>
               </div>
    )
}