import React , {useState , useEffect , useContext} from 'react';
import './ChallengeOne.css';
import { Link } from 'react-router-dom';
import '../components/TimeCircle.css';
import { AppContext } from '../context/AppContext';

const ChallengeOne = () => {

  const { points , setPoints } = useContext(AppContext);

  const [challengeSolved , setChallengeSolved] = useState(false);
  const [challegneStatus , setChallengeStatus] = useState(false);

  const handleLose = () => {
    setChallengeSolved(true);
    setChallengeStatus(false);
  }



  const [timer, setTimer] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, setChallengeSolved, setChallengeStatus]);

  const calculateDashArray = () => {
    const radius = 50; // adjust this based on your design
    const circumference = 2 * Math.PI * radius;
    const progress = ((50 - timer) / 50) * circumference;
    return `${progress} ${circumference}`;
  };

  setTimeout(() => {
    setChallengeSolved(true);
    setChallengeStatus(true);
    setPoints( points + 400);
  } , 35000)


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
        <Link to="/cha3" >
        <button className="btn mt-1 cha1_btn"> أنتقال  </button>
        </Link>

      </div>


      </div>
    ) : (
      <div className="cha1_card">

      <div className="timer-circle">
      <svg className="circle-svg" width="100" height="100">
        <circle
          className="circle"
          cx="50"
          cy="50"
          r="50"
          style={{
            strokeDasharray: calculateDashArray(),
          }}
        />
      </svg>
      <div className="timer-text">{timer}s</div>
    </div>


  <img src="/images/iphone.png" alt="" className="iphone_mock" />

  <h1 className="headline_card mt-3 span_green">  مبروك ! </h1>
  <h1 className="headline_subcard mt-1"> تم أختيارك عشوائينا من بين أكثر من 500 مستخدم للحصول على جائرة أيفون 15 برو ماكس </h1>



  <h1 className="headline_subcard ">
    لتأكيد يرجى النقر على الزر وإدخال عنوان الشحن
  </h1>

  <button className="btn mt-1 cha1_btn" onClick={() => handleLose() } > تأكيد الشحن </button>
</div>
    ) }



    </div>
  )
}

export default ChallengeOne
