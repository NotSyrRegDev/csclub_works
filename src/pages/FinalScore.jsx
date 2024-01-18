import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';



const FinalScore = () => {

  const { points  } = useContext(AppContext);
  return (
    <div className='home_flex' >
    <div className="home_headline span_green mb-2 ">  {points}  🥇 </div>
    <h1 className="home_headline_mid"> شكرا لحل التحديات  ⭐ </h1>
    <div className="home_para mt-1">  أزداد وعيك اكثر وأكثر في مجال الأمن السيبراني
      <br />
      نتنمى رؤيتك مرات أكثر في فعالياتنا القادمة
     </div>

    </div>
  )
}

export default FinalScore
