import React , {useContext} from 'react';
import './Navbar.css';
import { AppContext } from '../context/AppContext';


const Navbar = () => {

  const { points } = useContext(AppContext);


  return (
    <nav className="navbar_main container-sm">

    <div className="logo_div ">

    <h1 className="headline_nav text-center"> مجموع نقاطك الحالية <br />
    <span className="score"> {points} </span>
    </h1>

    </div>


    <div className="logo_div  d-flex-c">
          <img src="/images/logo_white.jpeg" alt="" className="logo_navbar" />
         <h6 className='mx-1 headline_logo' >نادي الحاسب <br />
          الألي والأمن  <br />
          السبراني
          </h6>
      </div>


    </nav>

  )
}

export default Navbar