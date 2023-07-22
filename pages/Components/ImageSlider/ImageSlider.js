import React from 'react';
import MainImage from '../../../src/asset/Rectangle 9.png'
import RasamTextTitle from '../../../src/asset/rasamText.png'
import Image from 'next/image';


export const ImageSlider = () => {

const mainTitle={
  fontFamily:'AriaUltraBold',
  fontWeight:900,
  fontSize:'42px'
}




  return (
    <div className='row flex-wrap  ' >

        <div className='col-lg-4 col-12   '  >
        <div className='TextContainer my-lg-3 shadow ' >
          <div className='mb-4' >
            <h1 style={mainTitle} className='text-light w-100 lh-sm  ' >
            لیتو گرافی رسام نقش
            </h1>
          </div>
          <div>
            <h1  className='fs-4 fw-bold  ' style={{fontFamily:'AriaUltraBold',color:'#FFD601'}} >
            تولید کننده انواع کلیشه های ژلاتینی (دیجیتال)
            </h1>
          </div>

          <div className='mt-5'>
            <p  className='fs-6  text-light lh-lg  ' style={{fontFamily:'IranSans'}} >
            شرکت رسام نقش آناهیتا در سال ۱۴۰۰ با تکیه بر دانش فنی موسسان خود تاسیس شد
            </p>
          </div>

          <div>
            <p className='fs-6  text-light lh-lg'>
              
این شرکت با راه اندازی تعداد دو خط از ماشین آلات لیزری تولید کلیشه اقدام به تولید کلیشه های ژلاتینی لیزری نموده و با راه اندازی ۲ خط کلیشه دیجیتال با استفاده از تکنولوژی شرکت کداک قابلیت تولید این محصول با کیفیت بسیار بالا را دارد.


            </p>
          </div>

          <div>

          </div>

        </div>


       </div>
   
    <div className='col-lg-8 col-12 p-0' >

    <div className='w-100 px-4  ' >
    <Image
      src={MainImage}
      width='100%'
      height='100%'
      alt="Picture of the author"
      style={{width:'inherit',height:'678px'}}
      />
    </div>
    </div>

  
    </div>
  )
}
