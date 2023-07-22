import React from 'react';
import Logo from '../../../src/asset/logo192.png';
import Image from 'next/image';
import Docs from '../../../src/asset/FooterIcons/Docs.svg';
import Location from '../../../src/asset/FooterIcons/Location.svg';
import Call from '../../../src/asset/FooterIcons/Call.svg';
import PersonMail from '../../../src/asset/FooterIcons/MailBox.svg';
import WritePage from '../../../src/asset/FooterIcons/WritePage.svg';
import Persons from '../../../src/asset/FooterIcons/Persons.svg';
import DocSen from '../../../src/asset/FooterIcons/DocSen.svg';
import ImgG from '../../../src/asset/FooterIcons/ImgG.svg';

import DocsPerson from '../../../src/asset/FooterIcons/DocsPerson.svg';


const Footer = () => {


const linkStyle={
  fontFamily:'Aria',
  fontSize:'15px'
}



  return (
    <div className='row  FooterContainer rounded-3  flex-wrap mt-5 ' >

     <div className='col-12 col-md-8  ' >
        <div className='row'>
        <div className='col-12 col-md-9 mx-auto   d-flex  mx-auto align-items-center' style={{height:'100px'}} >
        <div className='d-flex align-items-center ' >
      
        <Image 
          src={Logo}
          width={50}
          height={50}
          style={{margin:'0px 20px'}}
          alt='rasam'
          />
       
          <h5 style={{fontFamily:'Aria'}} className='fw-bold fs-4 text-light ' >رسام نقش آناهیتا</h5>
        </div>
        </div>
        <div className='col-12 col-md-9    mx-auto' style={{height:'300px'}} >
        <div className='row' >

          <div className='col-12 col-md-6 ' style={{height:'75px'}} >
         <div className='w-100 h-100 d-flex justify-content-start align-items-center' >
         <Image
         src={Docs}
         width={30}
         alt='rasam'
         />
         <span className='badge' style={linkStyle} >
         دانش نامه و مقالات
         </span>
         </div>
          </div>

          <div className='col-12 col-md-6 ' style={{height:'75px'}} >
          <div className='w-100 h-100 d-flex justify-content-start align-items-center' >
         <Image
         src={DocSen}
         width={30}
         alt='rasam'
         />
         <span className='badge' style={linkStyle} >
         ثبت سفارش 
         </span>
         </div>
          </div>
          <div className='col-12 col-md-6 ' style={{height:'75px'}} >
          <div className='w-100 h-100 d-flex justify-content-start align-items-center' >
         <Image
         src={WritePage}
         width={30}
         alt='rasam'
         />
         <span className='badge' style={linkStyle} >
         آموزش های فنی طراحی 
         </span>
         </div>
          </div>
          <div className='col-12 col-md-6 ' style={{height:'75px'}} >
          <div className='w-100 h-100 d-flex justify-content-start align-items-center' >
          <Image
          src={ImgG}
          width={30}
          alt='rasam'
          />
          <span className='badge' style={linkStyle} >
          گالری تصاویر
          </span>
          </div>
         </div>

         <div className='col-12 col-md-6 ' style={{height:'75px'}} >
         <div className='w-100 h-100 d-flex justify-content-start align-items-center' >
         <Image
         src={Persons}
         width={30}
         alt='rasam'    
         />
         <span className='badge' style={linkStyle} >
         درباره ما 
         </span>
         </div>
        </div>

        <div className='col-12 col-md-6 ' style={{height:'75px'}} >
         <div className='w-100 h-100 d-flex justify-content-start align-items-center' >
         <Image
         src={DocsPerson}
         width={30}
         alt='rasam'
         />
         <span className='badge' style={linkStyle} >
         استخدام
         </span>
         </div>
        </div>

        </div>
        </div>
        </div>
     </div>



     <div className='col-12 col-md-4    ' style={{height:'300px'}}>
    <div className='row' >
    <div className='col-12 col-md-6  ' style={{height:'100px'}}  >
    <div className='w-100 h-100 d-flex justify-content-start align-items-center' >
         <Image
         src={Call}
         width={30}
         alt='rasam'
         />
         <span className='badge' style={linkStyle} >
         021-91092227
         </span>
    </div>
    <div className='w-100 h-100 d-flex justify-content-start align-items-center' >
         <Image
         src={Location}
         width={30}
         alt='rasam'
         />
         <span className='badge' style={linkStyle} >
         کیلومتر 24 جاده مخصوص کرج، گرمدره، خیابان سروستان، کوی سوم غربی، پلاک 133
         </span>
    </div>
    <div className='w-100 h-100 d-flex justify-content-start align-items-center' >
         <Image
         src={PersonMail}
         width={30}
         alt='rasam'
         />
         <span className='badge' style={linkStyle} >
         3163839995
         </span>
    </div>
    </div>
    </div>
     </div>
    </div>
  )
}

export default Footer