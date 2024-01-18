import React from 'react';
import { AppProvider } from './context/AppContext.jsx';
import {  BrowserRouter,  Route,   Routes, } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import FinalScore from './pages/FinalScore.jsx';
import ChallengeThree from './pages/ChallengeThree.jsx';
import ChallengeTwo from './pages/ChallengeTwo.jsx';
import ChallengeOne from './pages/ChallengeOne.jsx';
import ChallengeFours from './pages/ChallengeFours.jsx';


const App = () => {
  return (
    <AppProvider>

   <div className="iwaiter_container">

   <BrowserRouter>

      <Navbar />
       <Routes>

          <Route
            path="/"
           element={
              <Home />
         }
        />

      <Route
            path="/cha1"
           element={
                  <ChallengeTwo />
         }
        />

          <Route
            path="/cha2"
           element={
                  <ChallengeOne />
         }
        />

          <Route
            path="/cha3"
           element={
                  <ChallengeThree />
         }
        />

          <Route
            path="/cha4"
           element={
                  <ChallengeFours />
         }
        />

          <Route
            path="/thanks"
           element={
                  <FinalScore />
         }
        />


       </Routes>

    </BrowserRouter>

   </div>

    </AppProvider>
  )
}

export default App
