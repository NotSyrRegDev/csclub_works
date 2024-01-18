import React from 'react';
import './ChallengeTwo.css';


const ChallengeTwo = () => {
  return (
    <div className='cha1_bg' >

    <div className="cha1_card">

      <h1 className="headline_card_mid mt-3 ">  التسجيل في النادي </h1>

      <div className="action_div">
        <label htmlFor="" className="label_form">  الاسم الاول  </label>
        <input type="text" placeholder='إدخال الاسم الاول' className="input_form" />
      </div>

      <div className="action_div">
        <label htmlFor="" className="label_form"> الاسم الاخير </label>
        <input type="text" placeholder='إدخال الاسم الاخير' className="input_form" />
      </div>

      <div className="action_div">
        <label htmlFor="" className="label_form"> العمر </label>
        <input type="number" placeholder='إدخال العمر' className="input_form" />
      </div>

      <div className="action_div">
        <label htmlFor="" className="label_form"> إيميل التواصل </label>
        <input type="email" placeholder='إدخال الايميل' className="input_form" />
      </div>

      <div className="action_div">
      <h1 className="headline_subcard">  الشروط والأحكام </h1>
        <h1 className="headline_subcard span_green"> لقراءة الشروط والأحكام </h1>
      </div>


      <button className="btn mt-1 cha1_btn"> تأكيد التسجيل </button>
    </div>

    <div className="popup_success_div">

    <div className="close_div">
      <img src="/icons/error.png" alt="close" className="close_icon" />
    </div>

    <h1 className="headline_card_mid mt-2 span_green">  الشروط والأحكام </h1>

    <h1 className="headline_subcard"> يرجى قراءة الشروط والأحكام بعناية   </h1>

    <div className="mt-3"></div>

    <p className='p_short' >باستخدام هذا الموقع، فإنك توافق على الالتزام بالشروط والأحكام التالية:</p>

    <p className='p_short' >1. يجب أن تكون في سن 18 عامًا أو أكثر لتسجيل حساب في هذا الموقع.</p>

    <p className='p_short' >2. يجب عليك تقديم معلومات صحيحة وكاملة أثناء عملية التسجيل.</p>

    <p className='p_short' >3. يحظر استخدام الحساب الخاص بك لأي نشاط غير قانوني أو مخالف للأخلاق.</p>

    <p className='p_short p_bold' >4. تحذير التسجيل في مواقع غير موثوقة خطر جدا , لاجتياز التحدي  <span className="span_green clickable">يرجى الضعط هنا</span> </p>


    </div>

    </div>
  )
}

export default ChallengeTwo
