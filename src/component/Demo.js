import React from 'react';
import * as microsoftTeams from "@microsoft/teams-js";
import './../App.css';


function App() {

  console.log('demo color')
  microsoftTeams.initialize();
  console.log('demo color2 ')
  microsoftTeams.getContext(function (context) {
    alert('hjv')
    if (context && context.theme) {
  
        console.log(context.theme);
    }else{
      console.log('no theme');
    }
});

  return (
    <div className="App">

      <p>Demo 3</p>

     
    </div>
  );
}

export default App;