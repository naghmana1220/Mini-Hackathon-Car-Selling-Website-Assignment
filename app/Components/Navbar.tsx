import React from "react";
import Image from "next/image";

export default function Navbar () {
    return (
      <div>
      <header>
          <div className="bg-slate-700 text-white pl-2">
          Download App Via SMS

          

          
          {/* <h2 className=" text-white flex w-full justify-end mb-29 space-x-4 px-10 ">Sing Up</h2>
   */}
          </div>
          <nav className="bg-gray-900 h-16 flex items-center justify-between">
              <img className="h-12 w-60" src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg" />
                  <hr />
<br />

              <div className="flex items-center ml-16"></div>
  
                 <h1 className="text-blue-300 ml-20 font-bold font-700 text-2xl"></h1>

                 <ul className="flex space-x-12 text-white mr-6">
                  <li>Used Cars</li>
                  <li>New Cars</li>
                  <li>Bikes</li>
                  <li>AutoStore</li>
                  <li>Videos</li>
                  <li>Forums</li>
                  <li>Blog</li>
                 </ul>
                 <li>
                      <select id="More" name="More" className="bg-gray-900 text-white  mr-6 border-none px-5">
                          <option value="More">More</option>
                          </select> 
                        </li>
                        <li>
                            <button className="py-2 px-6  mr-16 justify-between  rounded-lg bg-red-600 hover:bg-gray-500 text-white">
                             Post an Ad
                            </button>
                        </li>
                </nav>
            </header>
        </div>
    );
}