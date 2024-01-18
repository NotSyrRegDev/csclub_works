import React from 'react';
import './ChallengeOne.css';
import TimerCircle from '../components/TimerCircle';


const ChallengeOne = () => {
  return (
    <div className='cha1_bg' >

    <div className="cha1_card">

    <TimerCircle />


      <img src="/images/iphone.png" alt="" className="iphone_mock" />

      <h1 className="headline_card mt-3 span_green">  مبروك ! </h1>
      <h1 className="headline_subcard mt-1"> تم أختيارك عشوائينا من بين أكثر من 500 مستخدم للحصول على جائرة أيفون 15 برو ماكس </h1>


  
      <h1 className="headline_subcard ">
        لتأكيد يرجى النقر على الزر وإدخال عنوان الشحن
      </h1>

      <button className="btn mt-1 cha1_btn"> تأكيد الشحن </button>
    </div>

    </div>
  )
}

export default ChallengeOne
