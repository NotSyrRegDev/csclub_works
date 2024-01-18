import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='home_flex' >
    <h1 className="home_headline"> مرحبا بك  </h1>
    <div className="home_subheadline mt-1"> لبدء بتجربة الألعاب يرجى الضغط هنا </div>

    <Link to="/cha1" >
    <button className="club_btn mt-2">  بدء التحديات </button>
    </Link>



    </div>
  )
}

export default Home
