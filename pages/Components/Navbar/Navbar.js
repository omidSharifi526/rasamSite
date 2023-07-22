import React from 'react';
import logo from '../../../public/logo192.png'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mx-auto navbarGraStyle " dir='rtl' >
    <div className="container-fluid">
      
      <a className="navbar-brand" href="#">
      <Image
      src={logo}
      width={50}
      height={50}
     className='mx-lg-2 mx-2'
      alt="Picture of the author"
      
    />
       <h1 className='badge text-dark  fs-5' >
       رسام نقش 
       </h1>
   
      </a>
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse   " id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto ">

          <li className="nav-item  " >
            <a className="nav-link active fs-6 mx-5 mx-lg-2 " aria-current="page" href="#">دانش نامه و مقالات</a>
          </li>
          <li className="nav-item" >
            <a className="nav-link  fw-bolder mx-5 mx-lg-2" aria-current="page" href="#">آموزش های فنی طراحی</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link  fw-bolder mx-5 mx-lg-2" aria-current="page" href="#">ثبت سفارش </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link  fw-bolder mx-5 mx-lg-2" aria-current="page" href="#">گالری تصاویر</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link  fw-bolder mx-5 mx-lg-2" aria-current="page" href="#"> استخدام</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link  fw-bolder" aria-current="page" href="#">درباره ما</a>
          </li>
          <li className="nav-item mx-md-4  mx-5 px-md-5" >
       
           <a className="  btn btn-primary fw-bolder rounded-5" aria-current="page" href="#"> ثبت سفارش </a>
   
          </li>
         
        
         

        </ul>
       
      </div>
      {/* <button className='btn btn-primary d-sm-none  d-md-block  mx-lg-3 ' style={{width:'8%',padding:'4px 6px',borderRadius:'18px'}}>
       ورود
      </button> */}

    </div>
  </nav>
  )
}

export default Navbar