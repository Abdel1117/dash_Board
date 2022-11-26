import React from 'react'
import MapComponants from '../../Compenants/MapComponants/mapComponants'
import {FcSupport} from 'react-icons/fc'
import {SlSocialFacebook, SlSocialTwitter, SlSocialLinkedin, SlSocialGoogle} from 'react-icons/sl'
import {Helmet} from "react-helmet"
export default function Home() {
  return (
<>  

    <Helmet>
      <meta charSet='utf-8' />
      <title>Mon Application </title>
    </Helmet>

    <section className='grid md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6'>
        
        <div className='shadow-md bg-blue-vervet text-white p-4 w-full h-full flex flex-col flex-wrap justify-between'>        
          <div className='flex items-center justify-between '>            
            <div className='mb-4'>
              <h2>Membres Online</h2>
              <p>10.543</p>
            </div>
            <div>
              <FcSupport size={"20px"} className="mr-4" />  
            </div>  
          </div>
          <div>
            <img className='rounded' src="https://via.placeholder.com/350x150"  alt="" />
          </div>
        </div>
        <div className='shadow-md bg-blue-light text-white p-4 w-full h-full flex flex-col flex-wrap justify-between '>        
          <div className='flex items-center justify-between '>            
            <div className='mb-4'>
              <h2>Membres Online</h2>
              <p>10.543</p>
            </div>
            <div>
              <FcSupport size={"20px"} className="mr-4" />  
            </div>  
          </div>
          <div>
            <img className='rounded' src="https://via.placeholder.com/350x150"  alt="" />
          </div>
        </div>
        <div className='shadow-md bg-orange-sepia text-white p-4 w-full h-full flex flex-col flex-wrap justify-between '>        
          <div className='flex items-center justify-between '>            
            <div className='mb-4'>
              <h2>Membres Online</h2>
              <p>10.543</p>
            </div>
            <div>
              <FcSupport size={"20px"} className="mr-4" />  
            </div>  
          </div>
          <div>
            <img className='rounded' src="https://via.placeholder.com/350x150"  alt="" />
          </div>
        </div>
        <div className='shadow-md bg-red-dark text-white p-4 w-full h-full flex flex-col flex-wrap justify-between '>        
          <div className='flex items-center justify-between '>            
            <div className='mb-4'>
              <h2>Membres Online</h2>
              <p>10.543</p>
            </div>
            <div>
              <FcSupport size={"20px"} className="mr-4" />  
            </div>  
          </div>
          <div>
            <img className='rounded' src="https://via.placeholder.com/350x150"  alt="" />
          </div>
        </div>
        
        <div className='shadow-md bg-blue-facebook text-white w-full h-full'>
          <div className='  min-h-[150px] flex justify-center items-center h-3/4'>
          <SlSocialFacebook size={"25px"} />
          </div>
          <div className='flex justify-center items-center h-1/4 bg-white text-slate-500 p-4'>
              <p>40 k FRIENDS | 450 FEEDS</p>
          </div>
        </div>
            
        <div className='shadow-md bg-blue-twitter text-white w-full h-full'>
          <div className='  min-h-[150px] flex justify-center items-center h-3/4'>
          <SlSocialTwitter size={"25px"} />
          </div>
          <div className='flex justify-center items-center h-1/4 bg-white text-slate-500 p-4'>
              <p>30 k FRIENDS450 TWEETS</p>
          </div>
        </div>
        <div className='shadow-md bg-blue-linkedin text-white w-full h-full'>
          <div className='  min-h-[150px] flex justify-center items-center h-3/4'>
          <SlSocialLinkedin size={"25px"} />
          </div>
          <div className='flex justify-center items-center h-1/4 bg-white text-slate-500 p-4'>
              <p>40 + CONTACTS250 FEEDS</p>
          </div>
        </div>
        <div className='shadow-md bg-red-google text-white w-full h-full'>
          <div className='  min-h-[150px] flex justify-center items-center h-3/4'>
          <SlSocialGoogle size={"25px"} />
          </div>
          <div className='flex justify-center items-center h-1/4 bg-white text-slate-500 p-4'>
              <p>94 k FOLLOWERS92 CIRCLES</p>
          </div>
        </div>
    </section>

    <section className='mt-12 w-full h-[550px] grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
      <MapComponants />
    </section>
</>
  )
}
