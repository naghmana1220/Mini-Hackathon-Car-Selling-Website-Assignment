import React from "react";

// export default function Herosection() {
//     return (
//       <section>
//       <div className="border-slate-500  bg-slate-400 border-4 flex-row">
//       <h1 className="text-gray-700   mt-10 pl-64 pr-13 pt-6 text-2xl  text-center">
    
//        <b> Sell Your Car on PakWheels and Get the Best Price
//        </b></h1>

    
//       <div className="Flex justify-center items-start space-x-8 mt-10 ml-10 pr-20">
//       <div className="pr-3 pl-14 pb-2  border border-r-6 p-8 w-4/12">
//       <h1 className="text-blue-900 font-bold mb-4  text-xl pl-4 bg-white  justify-evenly pb-1 pr-14 py-4 pe-28"><strong> 
//        Post your Ad on PakWheels</strong>
//       </h1>
      
      
      {/* <ul className="space-y-2  pr-4">
      <li className="text-gray-500 pb-49 pl-4 flex-wrap
                          content-evenly ">
       Post your Ad for Free in 3 Easy Steps</li>
      
       <li className="text-gray-500 pl-4">
       Get Genuine offers from Verified Buyers
       </li>
       <li className="text-gray-500 pl-4">
        Sell your car Fast at the Best Price</li>
       </ul>
        <button className="py-3 px-12 pl-4 pt-2 pr-3  mr-16 justify-between  rounded-lg bg-red-700 text-white shadow-2xl hover:shadow-cyan-600 h-14 w-40 my-6  ">
        Post Your Ad
        </button>
        </div>
        
       */}
       {/* <span className="mt-16   font-semibold ml-0 pl-80">OR</span>

      <div className="pl-16 border border-r-6 p-8 w-4/12 ">

      <h2 className="'mb-4 text-blue-950 font-bold text-xl">
      <strong>  Try PakWheels Sell It For Me </strong></h2> */}
       
    
      {/* <h1 className="text-blue-800  text-2xl pl-4 bg-white  justify-evenly pb-1 pr-14 py-4 pe-28">
      <strong>  Try PakWheels Sell It For Me </strong>
      </h1> */}
    
          {/* <ul className="space-y-2">
         <li className="text-gray-600 pb-49 pl-4 flex-wrap
                          content-evenly ">
          Dedicated Sales Expert to Sell your Car</li>
      
      <li className=" text-gray-600 pl-4">
      We Bargain for you and share the Best Offer
      </li>
    
       <li className="text-gray-600 pl-4 ">
       We ensure Safe & Secure Transaction
       </li>
       </ul>
       
       
            <button className="bg-blue-400 rounded-lg text-white h-10 w-40 my-6 hover:bg-blue-700">
            Register Your Car
            </button>
        </div>          
                </div>
        </div>          */}
      {/* </section>       
             
    );
  } */}





  export default function Hero() {
    return (
      <section>
        <div className='bg-gray-300 border-2 border-black  '>
          {/* Top heading with border */}
            <h2 className='text-center font-bold text-gray-800 text-2xl mt-10'>

              Sell Your Car on PakWheels and Get the Best Price
            </h2>
          
          
  
          <div className='flex justify-center items-start space-x-8 mt-10'>
            
            {/* Left Section */}
            <div className='pr-3 border border-r-6  border-gray-400 p-8 w-4/12 '>
              <h3 className='mb-4 text-blue-950 font-bold text-xl'>
                Post your Ad on PakWheels
              </h3>
              <ul className='text-gray-700 space-y-2'>
              <li>✔️ Post your Ad for Free in 3 Easy Steps</li>
              <li>✔️ Get Genuine offers from Verified Buyers</li>
              <li>✔️ Sell your car Fast at the Best Price</li>
            </ul>
            <button className='bg-red-700 rounded text-white h-10 w-40 my-6 hover:bg-red-800'>
              Post Your Ad
            </button>
          </div>

          {/* OR Divider */}
            <span className='mt-16 text-gray-700 font-semibold ml-0 '>OR</span>
          {/* Right Section */}
          <div className='pl-16 border border-r-6 border-gray-500 p-8 w-4/12 '>
          <h3 className='mb-4 text-blue-950 font-bold text-xl'>
              Try PakWheels Sell It For Me
            </h3>
            <ul className='text-gray-700 space-y-2'>
              <li>✔️ Dedicated Sales Expert to Sell your Car</li>
              <li>✔️ We Bargain for you and share the Best Offer</li>
              <li>✔️ We ensure Safe & Secure Transaction</li>
            </ul>
            <button className='bg-blue-400 rounded text-white h-10 w-40 my-6 hover:bg-blue-700'>
              Register Your Car
            </button>
          </div>
        </div>
        </div>
      </section>
       );
}