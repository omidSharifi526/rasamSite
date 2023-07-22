import React from 'react';
import Image from 'next/image';
import Ai from '../../../src/asset/Berands/Ai.svg'
import Ps from '../../../src/asset/Berands/Ps.svg';
import fourline from '../../../src/asset/Berands/4line.svg';
import Water from '../../../src/asset/Berands/water.svg';
import Toolss from '../../../src/asset/Berands/tools.svg';
import Rectang from '../../../src/asset/Berands/rectang.svg';
import Kodak from '../../../src/asset/Berands/kodak.svg';
import Flex from '../../../src/asset/Berands/FlexPro.svg';

const Tools = () => {

    const logoContainer={
        width:'75px',
        height:'75px',

    }

    const logoStyle={
        borderRadius:'10px',
        padding:'5px',
        width:'75px',
        height:'75px'
    }

  return (
    <div className='row '  >
        <div className='col-10 mx-auto '   >
     <div className='w-100   d-flex flex-column justify-content-start ' >
      <h2 style={{fontFamily:'Aria',fontWeight:'700',fontSize:'38px',color:'#1B60E6'}} className='pl-5 mt-1' >
      ابزار های ما
      </h2>
     <div className='badge' >
     <p>
      تیم رسام همواره تلاش نموده تا از بروز ترین و با کیفیت ترین ابزار ها در راستای بر طرف نمودن نیاز مشتریان استفاده کند.
      </p>
     </div>
     </div>
     <div className='w-100  d-flex justify-content-between align-items-center flex-wrap' style={{height:'100px'}}>
    <div style={{logoContainer}} className='shadow rounded-2  bg-transparent m-3' >
     <Image
     src={Ai}
     alt='rasam'
     style={logoStyle}
     />
    </div>

    <div style={{logoContainer}} className='shadow rounded-2 bg-transparent m-3' >
     <Image
     src={Ps}
     width={50}
     height={50}
     style={logoStyle}
     alt='rasam'
     />
    </div>
    <div style={{logoContainer}} className='shadow rounded-2 bg-transparent m-3' >
     <Image
     src={fourline}
     width={50}
     height={50}
     style={logoStyle}
     alt='rasam'
     />
    </div>
    <div style={{logoContainer}} className='shadow rounded-2 bg-transparent m-3' >
     <Image
     src={Water}
     width={50}
     height={50}
     style={logoStyle}
     alt='rasam'
     />
    </div>
    <div style={{logoContainer}} className='shadow rounded-2 bg-transparent m-3' >
     <Image
     src={Toolss}
     width={50}
     height={50}
     style={logoStyle}
     alt='rasam'
     />
    </div>
    <div style={{logoContainer}} className='shadow rounded-2 bg-transparent m-3' >
     <Image
     src={Rectang}
     width={50}
     height={50}
     style={logoStyle}
     alt='rasam'
     />
    </div>
    <div style={{logoContainer}} className='shadow rounded-2 bg-transparent m-3' >
     <Image
     src={Kodak}
     width={50}
     height={50}
     style={logoStyle}
     alt='rasam'
     />
    </div>
    <div style={{logoContainer}} className='shadow rounded-2 bg-transparent m-3' >
     <Image
     src={Flex}
     width={50}
     height={50}
     style={logoStyle}
     alt='rasam'
     />
    </div>
    
     </div>
        </div>
    </div>
  )
}

export default Tools