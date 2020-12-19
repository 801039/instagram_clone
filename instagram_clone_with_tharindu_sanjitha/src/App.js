import React from 'react';
import './App.css';

function App() {
  return (

    //BEM naming convension
    <div className="app">
     <h1>Instagram Clone</h1>

    <div className="app_top">
     {/*Image at top*/}
     <img className="app_logo" src="https://ucentralmedia.com/wp-content/uploads/2020/04/Instagram-logo.jpg"alt=""/>
     {/*Reels text*/}
     <h1>Reels</h1>
     </div>

     <div className="app_videos">
     {/*Container of app viedeo(Scrolable container)*/}

     {/*<video/>*/}
     {/*<video/>*/}
     {/*<video/>*/}
     {/*<video/>*/}
     {/*<video/>*/}
    </div>
    </div>
  );
}

export default App;
