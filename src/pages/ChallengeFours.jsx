import React , {useState , useEffect , useContext} from 'react';
import './ChallengeFour.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import TextAnimation from '../components/TextAnimation';

const ChallengeFours = () => {

    const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (time < 60) { // Assuming a maximum of 60 seconds for simplicity
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

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
    setPoints( 1200);
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
        <h1 className="headline_card_mid mt-2 span_green text-center"> ربحت 400 نقطة أستمر </h1>
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

        <div className="close_call" onClick={() => handleWin() } >
            <p className='close_para' > إغلاق المكالمة  </p>
        </div>

    <div className="d-flex-c ">
        <h1 className='headline_card_mid' >  مكالمة جارية:  </h1>
        <h1 className='headline_card_mid span_green mx-1'>{formatTime()}</h1>
    </div>
  <div className="mt-2"></div>

  <TextAnimation text={['مرحبا معك نجوى احمد , من خدمة العملاء في شركة العطور']} />

  <TextAnimation text={['اجرينا سحوبات عشوائية ونحب نبلغك ربحت بكج عطور ']} />

  <TextAnimation text={['أحتاج منك تدخل الرمز الموجود في الأعلى للاستمرار']} />




  <div className="action_div">
  <label className="label_form ">
      الرمز المطلوب: 2521
  </label>
        <input type="number" placeholder='إدخال الرمز' className="input_form" />
      </div>

  <button className="btn mt-1 cha1_btn" onClick={() => handleLose() } > تأكيد  </button>
</div>
    ) }



    </div>
  )
}

export default ChallengeFours
