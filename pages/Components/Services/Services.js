import React from 'react'
import Image from 'next/image';
import Delivery from '../../../src/asset/ServiceIcons/Delivery, Truck, Fast 1.svg';
import Certificate from '../../../src/asset/ServiceIcons/Certificate, Checkmark, Done, Check 1.svg';
import Employees from '../../../src/asset/ServiceIcons/employees-checkmark.svg';
import HeadPhones from '../../../src/asset/ServiceIcons/headphones-signal.svg';
import Group from '../../../src/asset/ServiceIcons/Group 48.svg'
const Services = () => {

    // const sectionStyle={
    //     display:'flex',
    //     justifyContent:'start',
    //     alignItems:'start',
    //     flexDi
    //   }

    const cardHeader={
      fontFamily:'Aria',
      textAlign:'right',
      fontSize:'20px',
      fontWeight:'900'
    }

    const GroupImgStyle={
      width:'70%',
      height:'70%',
      alignSelf:'center'

    }

  return (
    <div className='row ' style={{backgroundColor:'#FBFBFA'}} >
        <div className='col-12 col-md-3  d-flex flex-column'  >
       <div className='w-100  d-flex justify-content-center py-2 w-75 '   > 
        <h5 className="card-title px-4 align-self-center mt-4 " style={{fontSize:'40px',fontFamily:'Aria',fontWeight:700,color:'#1B60E6'}}>خدمات ما</h5>
      </div>
        <div className='w-100 h-100 d-flex justify-content-center align-items-center' >
          <Image
          src={Group}
          style={GroupImgStyle}
          alt='rasam'
          />
        </div>
        </div>
        <div className='col-12 col-md-9 ' >
        <div className='row' >
        <div className='col-12 col-md-6 '  >
        <div  className='d-flex flex-column justify-content-start align-items-center' >
            
          <div className='px-lg-5 py-2 py-lg-4 '>
          <div className="card px-4" >
          <div className='px-5'>
          <Image src={Employees} width={78} height={78}  alt='rasam' />
          </div>
          <div className="card-body ">
            <h5 className="card-title px-4 px-lg-1"  style={cardHeader}>پاسخ گویی و احترام به حقوق مشتری </h5>
            <p className="card-text px-4 lh-lg">شرکت رسام نقش همیشه حقوق مشتریان خود را در اولویت قرار داده است و در راستای رضایت مشتری تلاش می نماید</p>
            
          </div>
        </div>
          </div>
          
        </div>
        </div>
        <div className='col-12 col-md-6 ' >
        <div  className='d-flex flex-column justify-content-start align-items-center' >
          
          <div className='px-lg-5 py-lg-4 py-2 '>
          <div className="card px-4" >
          <div className='px-5'>
          <Image src={Certificate}  width={78} height={78} alt='rasam'  />
          </div>
          <div className="card-body ">
            <h5 className="card-title px-4 px-lg-1"  style={cardHeader}>کیفیت بسیار بالا و قیمت رقابتی</h5>
            <p className="card-text px-4 lh-lg ">همواره تلاش می نماییم مناسب ترین قیمت را با کیفیت بالا به مشتریان خود ارائه دهیم</p>
            
          </div>
        </div>
          </div>
          
        </div>
        </div>
        <div className='col-12 col-md-6 '  >
        <div  className='d-flex flex-column justify-content-start align-items-center' >
          
          <div className='py-2  px-lg-5 py-lg-4  '>
          <div className="card px-4" >
          <div className='px-5'>
          <Image src={HeadPhones} width={78} height={78} alt='rasam'  />
          </div>
          <div className="card-body ">
            <h5 className="card-title px-4 px-lg-1"  style={cardHeader}>انتقال دانش فنی به همکاران و مشتریان</h5>
            <p className="card-text px-4 lh-lg">متخصص های ما با مطالعه و دانش بالای خود میتوانند شما را در مشکلات کلیشه و چاپ راهنمایی کنند</p>
            
          </div>
        </div>
          </div>
          
        </div>
        </div>
      <div className='col-12 col-md-6 '  >
          <div  className='d-flex flex-column justify-content-start align-items-center' >
          
          <div className='py-2  px-lg-5 py-lg-4  '>
          <div className="card px-4" >
          <div className='px-5'>
          <Image src={Delivery} width={78} height={78} alt='rasam' />
          </div>
          <div className="card-body ">
            <h5 className="card-title px-4 px-lg-1"  style={cardHeader}>سرعت در تولید و تحویل به موقع سفارش</h5>
            <p className="card-text px-4 px-lg-1 lh-lg">مجموعه ی ما با پیاده سازی اتوماسیون خاص و منظم خود را متعهد نموده است تا سفارشات را به موقع و با بیشترین سرعت تحویل دهد.</p>
            
          </div>
        </div>
          </div>
          
        </div>
      </div>
        </div>
        </div>
    </div>
  )
}

export default Services