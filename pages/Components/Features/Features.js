import React from 'react';
import img2 from '../../../src/asset/FeaturesIcons/+2.svg';
import img3 from '../../../src/asset/FeaturesIcons/+3.svg';
import img12 from '../../../src/asset/FeaturesIcons/+12.svg';
import Image from 'next/image';

const Features = () => {
  return (
    <div className='row  w-75 mx-auto border-1 rounded-2 shadow  mb-5 mt-5' >
     
      <div className='col-12 col-md-4  py-2 ' >
    <div className='d-flex justify-content-start  align-items-center px-3 h-100' >
   <Image
   src={img2}
   width={40}
   height={40}
   />
   <div>
    <h6 className='badge text-dark mt-2' style={{fontFamily:'Saad',fontSize:'18px'}} >
    خط تولید لیزری
    </h6>
   </div>
    </div>
        </div>



        <div className='col-12 col-md-4  py-2 ' >
    <div className='d-flex justify-content-start  align-items-center px-3 h-100' >
   <Image
   src={img12}
   width={50}
   height={50}
   />
   <div>
    <h6 className='badge text-dark mt-2' style={{fontFamily:'Saad',fontSize:'18px'}} >
    طراح  حرفه ای
    </h6>
   </div>
    </div>
        </div>




        <div className='col-12 col-md-4  py-2 ' >
    <div className='d-flex justify-content-start  align-items-center px-3 h-100' >
   <Image
   src={img3}
   width={50}
   height={50}
   />
   <div>
    <h6 className='badge text-dark mt-2' style={{fontFamily:'Saad',fontSize:'18px'}} >
    خط تولید آنالوگ
    </h6>
   </div>
    </div>
        </div>


        
     
    </div>
  )
}

export default Features