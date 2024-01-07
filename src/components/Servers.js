import { Link } from 'react-router-dom'
function Servers() {
    return (
        <>
        <div className='nnn'>
         <h1 style={{fontSize:"30px"}}>     العاملات المتوفرات</h1> 
         
    
          <Link className='server-section-cards-containar ' id="is" to="/contactt">
            <div className='server-section-icon ' id='gm'></div></Link>
            <h4 style={{textAlign:"center"}}>الوقت المتوفر :10صباحًا-5مساءًا</h4>
            <h4 style={{textAlign:"center"}}> الايام:طيلة ايام الأسبوع</h4>
            <h4 style={{textAlign:"center"}}> ⭐⭐⭐⭐⭐حاصلة على تقييم </h4>
           
         
           
        </div>
        <div className='nnn'>
         <h1 style={{fontSize:"30px"}}>     العاملات المتوفرات</h1> 
        
          <Link className='server-section-cards-containar ' id="is"to="/contactt">
            <div className='server-section-icon ' id='gm'></div></Link>
            <h4 style={{textAlign:"center"}}>الوقت المتوفر :9صباحًا-4مساءًا</h4>
            <h4 style={{textAlign:"center" }}> الايام:طيلة ايام الأسبوع</h4>
            <h4 style={{textAlign:"center"}}> ⭐⭐⭐⭐⭐حاصلة على تقييم </h4>
            
         
            
            
         
           
        </div>
       
        </>
    );
  }
  
  export default Servers;
  