import React , {useState , useEffect , useContext} from 'react';
import './ChallengeThree.css';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';


const ChallengeThree = () => {

  const { points , setPoints } = useContext(AppContext);

  const [challengeSolved , setChallengeSolved] = useState(false);
  const [challegneStatus , setChallengeStatus] = useState(false);

  const handleLose = () => {
    
    setChallengeSolved(true);
    setChallengeStatus(false);
  }

  const handleWin = () => {

    setChallengeSolved(true);
    setChallengeStatus(true);
    setPoints(points + 600);
  }



  return (
    <div className='cha1_bg' >

    {challengeSolved ? (
      <div className="challegne_solution">


<img src={`/images/${challegneStatus ? 'success.jpg' : 'uncorrect.jpg'}`} alt="" className="iphone_mock bg_solution" />

<div className="cha1_card mt-1">

{challegneStatus ? (
    <>

    <h1 className="headline_card_mid mt-2 span_green text-center"> نجحت في التحدي وكنت واعي </h1>
    <h1 className="headline_card_mid mt-2 span_green text-center"> ربحت 600 نقطة أستمر </h1>
    </>

    ) : (
    <h1 className="headline_card_mid mt-2 span_green text-center">
    حاولت تكون أكثر وعيا عند استخدام الانترنت
    </h1>
    )}

    <h1 className="headline_card_mid mt-1 ">  يلا نروح التحدي الي بعده  </h1>
    <Link to="/thanks" >
    <button className="btn mt-1 cha1_btn"> أنتقال  </button>
    </Link>

    </div>


    </div>
    ) : (
      <div className="cha1_card">

<h1 className="headline_card_mid mt-3 span_green"> وصلتك طلبية </h1>
  <h1 className="headline_subcard "> يرجى تأكيد عنوانك لاستلام الطلبية </h1>

  <img src="/images/track.png" alt="" className="iphone_mock mt-2" />

  <div className="d-flex-c  mt-1">
  <button className="btn  cha3_btn_cancel mx-2" onClick={() => handleWin() } > إبلاغ </button>
  <button className="btn  cha3_btn" onClick={() => handleLose() }> تأكيد الاستلام </button>
  </div>


</div>
    )}



    </div>
  )
}

export default ChallengeThree
