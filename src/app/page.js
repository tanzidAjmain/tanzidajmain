// 'use client'
import Image from "next/image"
// import { headers } from "next/headers"
// let width = window.innerWidth;
// let height= window.innerHeight

export default function Home() {
  return(
    <div>
      <headers>
        <title>
          TanzidAjmainInfo
        </title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Manufacturing+Consent&family=PT+Sans+Narrow:wght@400;700&display=swap');
        </style>
      </headers>
    <div className="flex flex-row justify-between p-3.5 min-w-dvw">
      <h1 className="font-bold  ">
        Portified folio
      </h1>
      <h1 className="text-amber-600 pl-2.5 font-bold">
        .
      </h1>
      <div className="flex justify-end">
      <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-asterisk-icon lucide-asterisk"><path d="M12 6v12"/><path d="M17.196 9 6.804 15"/><path d="m6.804 9 10.392 6"/></svg>
      </div>
    </div>

    {/* <div className="flex-col justify-center  justify-items-center "> */}
    <div className="w-dvw flex justify-center pt-20 pb-5">
    <Image src={'/IMG_0021.jpg'} width={'270'} height={'300'} alt="loading the dumbass"/>
      <h1 className="font-[IBM_Plex_Mono] text-amber-600 font-semibold text-xl">
        Hi,<br/> the sweetest <br/>person there.
      </h1>
      <div/>
   </div>
      <div className="flex justify-center ">
        <p className="font-[IBM_Plex_Mono] w-115 p-5">
          I'm Tanzid Ajmain, a BBA dude at the University of Dhaka, 
        love pogramming, hoping around data science these days, have a soft corner for content creation and visuals, 
        Have a good hand in painting. Love to dissect creative fields.
        </p>
    </div>

          <div className="flex justify-center ">
        <p className="text-amber-100 font-[IBM_Plex_Mono] w-115 p-5">
         x--------------------------------x
        </p>
    </div>

      <div className="flex justify-center ">
        <p className="text-amber-100 font-[IBM_Plex_Mono] w-115 p-5">
         Proffesional plan? Consulting in creative fields and business analytics.
        </p>
    </div>

      <div className="flex justify-center ">
        <p className="text-amber-100 font-[IBM_Plex_Mono] w-115 p-5">
         x--------------------------------x
        </p>
    </div>

       <div className="flex justify-center ">
        <p className="text-amber-200 font-[IBM_Plex_Mono] w-115 p-5">
         My <a className="text-blue-400" href="https://www.instagram.com/tanzid_akashe/">Instagram</a>, <a className="text-blue-400" href="hellotanzid@gmail.com">Email</a>
        </p>
    </div>

          <div className="flex justify-center ">
        <p className="text-amber-0 font-[IBM_Plex_Mono] w-115 p-5">
         x--------------------------------x
        </p>
    </div>

    <div className="flex justify-center ">
        <p className="text-amber-300 font-[IBM_Plex_Mono] w-115 p-5">
         A movie to watch : la haine
        </p>
    </div>

    <div className="flex justify-center ">
        <p className="text-amber-100 font-[IBM_Plex_Mono] w-115 p-5">
         x--------------------------------x
        </p>
    </div>

    <div className="flex justify-center ">
        <p className="text-amber-400 font-[IBM_Plex_Mono] w-115 p-5">
         A book to read : Idk I'm not that good of a reader.
        </p>
    </div>

      <div className="flex justify-center ">
        <p className="text-amber-100 font-[IBM_Plex_Mono] w-115 p-5">
         x--------------------------------x
        </p>
    </div>

      <div className="flex justify-center ">
        <p className="text-amber-500 font-[IBM_Plex_Mono] w-115 p-5">
          A good perfume to try : Sea Fruit by "শূন্য ও অসীম"
        </p>
    </div>

         <div className="flex justify-center ">
        <p className="text-amber-100 font-[IBM_Plex_Mono] w-115 p-5">
         x--------------------------------x
        </p>
    </div>

    <div className="flex justify-center ">
        <p className="text-amber-600 font-[IBM_Plex_Mono] w-115 p-5">
         Monthly qoute : One must imagine sisyphus happy.*
        </p>
    </div>
     
     <div className="pl-10 pt-15 flex w-dvw justify-center font-[IBM_Plex_Mono]">
      <h1>-X-</h1>
     </div>

    <div className="w-dvw flex justify-around pl-10">
      <Image className="rounded-2xl" src={'/WhatsApp Image 2025-07-17 at 03.17.26.jpeg'} height={200} width={200}/>
    </div>
    <div className="flex justify-center pl-10 pb-10">
      <h1 className=" w-dvw text-xs pt-2 flex justify-center font-[IBM_Plex_Mono]">** Car's giving you a flower <br/> for reading till the end.</h1>
    </div>

     <div className="flex w-dvw justify-end p-5">
      <h1 className="text-s pt-2 font-[IBM_Plex_Mono]">~THE END~</h1>
    </div>

   </div>
  )
}
  
