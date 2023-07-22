import React from 'react';
import KlischeImg from '../../../src/asset/Klische.png';
import Image from 'next/image';
import DoubleCoute from './Static/DoubleCoute.svg'
import Frame from "../Advertising/Static/Subtract.svg";
const Advertising = () => {

  const designTextStyle={
    position:'absolute',
    top:'0px',
    color:'white',
    right:'110px',
    fontFamily:'Saad',
    fontSize:'20px',
    lineHeigth:'40px',

  }

  const yourImagineContainer={
    width:'418px',
    height:'74px',
    display:'flex',
    justifyContent:'start',
    position:'absolute',
    bottom:'0px',
    backgroundColor:'white',
    right: '60px',
    top: '69px',
    border:'1px solid blue'


  }
  const blueArae={
    height:'100%',
    width:'86px',
    backgroundColor:'#1B60E6',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'

  }
//  font-weight: ;
  const yourImageText={
    fontFamily:'Aria',
    fontWeight:'900',
    alignSelf:'center',
    fontSize:'24px',
    // lineHeight:'16px',
    marginRight:'22px',
    marginTop:'15px'


  }

  const textAreaContainer={
    margin:'0px auto',
    height:'100%',
    // backgroundColor:'pink',
    display:'flex',
    flexDirection:'column',
    justifyContent:'start',
    alignItems:'center',
    

  }

  const bestQualityText={
    fontFamily:'Saad',
    color:'#1B60E6',
    marginTop:'40px'
  }
// #E97C0F
  const importantText={
    fontFamily:'Saad',
    color:'#E97C0F'

  }

 







  return (
    <div className='row' >
   <div className='col-md-4 col-sm-12   d-flex justify-content-center align-items-start position-relative'  >
   <Image 
   src={KlischeImg}
   width='280px'
   height='484px'
   alt="Picture of the author"
   />
   <div className='itemsContainer' >
   <Image 
   src={Frame}
   height={195} width={195}
   style={{position:'absolute',bottom:'75px',right:'50px'}}
   alt='rasam'
   />
   <div className='yourImagineContainer' style={yourImagineContainer} >
  <div style={blueArae} >
  <Image
  src={DoubleCoute}
  style={{alignSelf:'center'}} 
  alt='rasam'
  />
  </div>
  <p style={yourImageText}>شما تصور کنید، ما خلق می کنیم</p>
   </div>

   <span style={designTextStyle} >طراحی و ساخت کلیشه</span>
    
   </div>
   </div>


   <div className='col-12 col-md-8 ' >
 
<div className='row' >

<div className='col-md-8 col-10  mx-auto' >
<h1 style={bestQualityText} >بهترین <span style={importantText} >کیفیت</span> مطابق <span style={importantText}>دانش روز</span> دنیا را از ما بخواهید!</h1>
   <p style={{lineHeight:'32px',marginTop:'20px',fontSize:'16px'}}>
      کلیشه های تولیدی با تکنولوژی Flat Top  که از جمله بهترین روشهای تولید کلیشه میباشد، توسط این شرکت با دقت و کیفیت بسیار بالا تولید و عرضه میگردد. <br/>
    تیم ما با بررسی و R&D انجام شده اقدام به تولید کلیشه هایی با کیفیت بسیار بالاتر از کلیشه های Flat Top نموده است که با نام DF به بازار مصرف عرضه میشود که عمده تولید این شرکت را در    بر گرفته است. <br/>
    شرکت رسام نقش آناهیتا با دارا بودن دو خط تولید فیلم آنالوگ قادر به تولید کلیشه های آنالوگ با عرض ۱۰۶ سانت می باشد که به نوبه خود بزرگترین عرض قابل تولید در نوع خود در کشور است.
   </p>
</div>

</div>
 

   </div>
    </div>
  )
}

export default Advertising