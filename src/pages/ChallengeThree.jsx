import React from 'react';
import './ChallengeThree.css';
import TimerCircle from '../components/TimerCircle';


const ChallengeThree = () => {
  return (
    <div className='cha1_bg' >

    <div className="cha1_card">

    <h1 className="headline_card_mid mt-3 span_green"> وصلتك طلبية </h1>
      <h1 className="headline_subcard "> يرجى تأكيد عنوانك لاستلام الطلبية </h1>

      <img src="/images/track.png" alt="" className="iphone_mock mt-2" />

      <div className="d-flex-c  mt-1">
      <button className="btn  cha3_btn_cancel mx-2"> إبلاغ </button>
      <button className="btn  cha3_btn"> تأكيد الاستلام </button>
      </div>


    </div>

    </div>
  )
}

export default ChallengeThree
