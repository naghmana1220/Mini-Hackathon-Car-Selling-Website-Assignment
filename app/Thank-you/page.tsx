import React from 'react'

export default function Thankyou() {
    return (
    
  <div className="h-screen w-full bg-slate-700 dark:bg-gray-100">
  <div className="h-full lg:w-[60%] sm:w-[80%] xs:w-[90%] mx-auto flex gap-8 items-center">
      <div
          className="flex flex-col gap-4 text-white dark:text-black p-4 rounded-lg border border-green-300 shadow-xl shadow-green-400/30">
          <h5 className="text-sm text-green-500 font-semibold">Naghmana Asif</h5>
          <div className="w-full flex gap-2 items-center justify-around">
              <div className="text-5xl font-semibold uppercase font-serif">Thank You For Shopping !!</div>
              <hr className="w-[50%] h-1 rounded-full border-t-green-500 bg-green-500" />
          </div>


<p>
Your order will be delivered in 3 Business days..
</p>
          <div className="flex gap-4 justify-center">
              <button className="w-full px-4 py-1 border-2 border-green-500 rounded-sm">Show More</button>
              <button className="w-full text-white px-4 py-1 bg-green-500 rounded-sm">Contact me</button>
          </div>
      </div>
  </div>
</div>
  )
}