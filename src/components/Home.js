import { Link } from "react-router-dom";
import React from 'react'
function Home() {
    return (
        <div className='home'>
        <div className='container'>
            <div>
                <h1>البيت اللامع 🌟</h1>
                <p>خدمات تنظيف </p>
            </div>
           
           <h3 className='h3'>ماذا نقدم؟</h3>
           <h6 className='h6'>نقدم لكم في شركة البيت اللامع خدمات التنظيف في المملكة الاردنية الهاشمية بجودة عالية ومن الخدمات التي نقدمها تنظيف المنازل تنظيف الشركات تنظيف الفلل والقصور والمجمعات التجارية والمجمعات السكنية والشقق الفارغة والمفروشة كما نقدم لكم خدمات تنظيف ما بعد البناء تنظيف الواجهات الزجاجية   تنظيف وتعقيم الكنب والسجاد والموكيت والبرادي  جلي وتلميع البلاط والسيراميك عقود تنظيف شهرية وسنوية باسعار مميزة نمتلك في شركة البيت اللامع لخدمات التنظيف فريق متميز وعلى خبرة عالية في مجال التنظيف كما نوفر خدمة تعقيم  </h6>
            
        </div>
        <div className='server-section-cards-containar'>
          
          
          <Link className='server-section-cards-containar ' id="icon"to="/server">
            <div className='server-section-icon ' id='icons'></div>
            <div className='card-title' id='title' style={{fontSize:'20px',color:'#1400eee4'}}>الخدمات</div>
          <div className='card-description' id='des' style={{color:'black'}}>
                  ماهي الخدمات التي تقدمها العاملات المتميزات 
    
          </div>
          </Link>
        
          <Link className='server-section-cards-containar ' id="islam" to="/servers">
            <div className='server-section-icon ' id='islam2'></div>
            <div className='card-title' id='title1'style={{fontSize:'20px',color:'#1400eee4'}}>العاملات المتوفرة</div>
          <div className='card-description' id='des1' style={{color:'black'}}>
                 الأيام والأوقات المتوفرة لدى العاملات 
          </div>
          </Link>
    
          <Link className='server-section-cards-containar ' id="task"to="/contactt">
            <div className='server-section-icon ' id='task2'></div>
            <div className='card-title' id='title2' style={{fontSize:'20px',color:'#1400eee4'}}>المعلومات للتواصل والطلب  </div>
          <div className='card-description' id='des2'style={{color:'black'}}>
                     كيفية الاتصال والتواصل معنا للطلب 
          </div>
        </Link>
        </div>
    </div>
      )
    }
    
   
  export default Home;
  