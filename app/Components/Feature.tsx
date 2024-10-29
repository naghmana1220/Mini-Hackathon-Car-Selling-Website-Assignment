import React from 'react'
import Link from 'next/link'

export default function Feature () {
    return (
                        <div className="bg-slate-400 border-2 border-gray-700 h-100">
                        <div className='flex'> 
                        <h1 className=" text-black text-2xl mb-1 pt-10"><strong><u>Featured New  Cars</u></strong></h1>
                        {/* <div classNa me="flex w-full justify-end mb-29 space-x-4 px-10" > */}
                        <a className="text-blue-800 ml-96 pl-96 mt-14 "><strong><u>View All New Cars</u></strong></a>
                        </div>
                        {/* <div className="flex items-center ml-16"></div> */}
                         
                         {/* <h1 className="text-blue-300 ml-20 font-bold font-700 text-2xl"></h1> */}

                         {/* <ul className="flex space-x-12 text-gray-700 mr-6 pt-1"> */}
                         <div className='space-x-9 pl-20  font-bold border-b-2 border-gray-300'>
                         <a className='text-blue-800   hover:bg-white'><strong><u>Popular</u></strong></a>                      
                         <a>Upcoming</a>
                         <a>Newly Launched</a>
                         </div>
                         {/* </ul> */}
                         <hr className="h-px my-8 mt-1 bg-gray-900 border-0 dark:bg-gray-700" />
                        
                         <div className="flex space-x-6 ml-12 mt-4"> 
                        <Link href="./Cars/Car-1Details" className='text-center w-3/12 px-3 bg-white'>

                     {/* <div className='bg-slate-300 pt-1 pl-6 h-100 w-4/2 mb-20'> */}
                        
                        <div className='hover:scale-105 transform transition duration-300 ease-in-out '>

                         <img className="pl-2  h-44 shadow-2xl bg-red rounded-xl ml-2                        
                          p-4 m-4 shadow-cyan-400 
                         hover:scale-123
                         duration-150 ease-in-out   width={300}
                         height={300}" 
                         src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/184121/tata-curvv-ev-left-front-three-quarter23.jpeg?isig=0&wm=0" />
                         
                        <h2 className="text-blue-900  pt-3 pl-16"><strong>Tata Curvv EV</strong></h2>
                        <h2 className="text-green-700 pl-12"><strong>PKR  8,310,000 lacs</strong></h2>
                        <span className='text-orange-500 font-extrabold'>★</span>
                        <span className='text-orange-500 font-extrabold'>★</span>
                        <span className='text-orange-500 font-extrabold'>★</span>
                        <span className='text-orange-500 font-extrabold'>☆</span>
                        <span className='text-orange-500 font-extrabold'>☆</span>
                        <span className='text-gray-500 font-bold pl-3'>621 Reviews</span>
                        </div>
                        </Link>

                        <Link href="./Cars/Car-2Details" className='text-center w-3/12 px-3 bg-white'>
                        {/* <div className="bg-slate-300 "> */}
                        <div className='hover:scale-105 transform transition duration-300 ease-in-out  '>
                        
                        <img className="pl-2  h-44 shadow-2xl bg-red rounded-xl 
                         p-4 m-4 shadow-cyan-400 
                         hover:scale-123
                         duration-150 ease-in-out   width={300}
                         height={300}    "
                         src="https://www.ccarprice.com/products/BMW_X5_xDrive30d_xLine.jpg" />
                         
                         <h2 className="text-blue-900  pt-3 pl-16"><strong>BMW X5 xDrive30d xLine</strong></h2>
                         <h2 className="text-green-700 pl-16"><strong>PKR 37,893,600</strong></h2>
                         <span className='text-orange-500 font-extrabold'>★</span>
                         <span className='text-orange-500 font-extrabold'>★</span>
                         <span className='text-orange-500 font-extrabold'>★</span>
                         <span className='text-orange-500 font-extrabold'>☆</span>
                         <span className='text-orange-500 font-extrabold'>☆</span>
                         <span className='text-gray-500 font-bold pl-3'>199 Reviews</span>
                         </div>
                         </Link>  


                         {/* <div className="bg-slate-300"> */}
                         <Link href="./Cars/Car-3Details" className='text-center w-3/12 px-3 bg-white'>
                        <div className='hover:scale-105 transform transition duration-300 ease-in-out  '>

                         <img className="pl-2 h-44 shadow-2xl bg-red rounded-xl 
                         p-4 m-4 shadow-cyan-400 
                         hover:scale-123
                         duration-150 ease-in-out   width={300}
                         height={300}" 
                         src="https://www.ccarprice.com/products/MINI_Countryman_SE_ALL4_65th_Anniversary_Edition_2025.jpg" />
                         <h2 className="text-blue-900  pt-3 pl-16"><strong>MINI Countryman SE ALL4</strong></h2>
                         <h2 className="text-green-700 pl-16"><strong>PKR 12,520,400</strong></h2>
                         <span className='text-orange-500 font-extrabold'>★</span>
                         <span className='text-orange-500 font-extrabold'>★</span>
                         <span className='text-orange-500 font-extrabold'>★</span>
                         <span className='text-orange-500 font-extrabold'>☆</span>
                         <span className='text-orange-500 font-extrabold'>☆</span>
                         <span className='text-gray-500 font-bold pl-3'>458 Reviews</span>
                         </div>
                         </Link>

                         {/* <div className="bg-slate-300"> */}
                        <Link href="./Cars/Car-4Details" className='text-center  px-3 bg-white border-2 hover:border-gray-700 pr-4 w-3/12 '>
                        <div className='hover:scale-105 transform transition duration-300 ease-in-out'>
                         <img className="pl-2  h-44 shadow-2xl bg-red rounded-xl 
                         p-4 m-4 shadow-cyan-400 
                         hover:scale-123 
                         duration-150 ease-in-out   width={300}
                         height={300}" 
                         src="https://www.ccarprice.com/products/Suzuki_Baleno_2024.jpg" />
                         <h2 className="text-blue-900  pt-3 pl-16"><strong>Suzuki Baleno</strong></h2>
                         <h2 className="text-green-700 pl-12"><strong>PKR 4,564,960 lacs</strong></h2>
                         <span className='text-orange-500 font-extrabold'>★</span>
                         <span className='text-orange-500 font-extrabold'>★</span>
                         <span className='text-orange-500 font-extrabold'>★</span>
                         <span className='text-orange-500 font-extrabold'>☆</span>
                         <span className='text-orange-500 font-extrabold'>☆</span>
                         <span className='text-gray-500 font-bold pl-3'>357 Reviews</span>
                         </div>
                         </Link>

                        </div>
                     </div> 
    )
}