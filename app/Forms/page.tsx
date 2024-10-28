import React from 'react'
import Link from 'next/link'

export default function Forms () {
    return (
        <div className='border-2 hover:border-gray-600 mt-20 mr-20 ml-60'>
           
         <h2 className="text-3xl bg-slate-100 font-semibold text-center pr-20 h-10 uppercase p-5  ">
          enter your details
         </h2>
        
         <div>
         <form className="flex gap-5 justify-center items-center flex-col pr-20 bg-emerald-100 h-96  ">
      
         <input type="name" className="p-2 rounded-2xl w-2/6 border border-slate-800"
       placeholder="Enter your name "  />

         <input type="Email" className="p-2 rounded-2xl w-2/6 border border-slate-800"
          placeholder="Enter your email "  />

        <input type="password" className="p-2 rounded-2xl w-2/6 border border-slate-800 "
         placeholder="Enter your password " />

        <input type="card" className="p-2 rounded-2xl w-2/6 border border-slate-800"
         placeholder="Enter your card number "  />

          <Link href="/Thank-you">
         <button className="py-3 px-7 rounded-lg bg-blue-900 shadow-2xl hover:shadow-cyan-500 hover:bg-slate-600 text-white">
         Place your order
         </button>
       </Link>

        </form>

         </div>
      </div>

    )
   
}