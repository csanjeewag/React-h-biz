import React from 'react';
import * as microsoftTeams from "@microsoft/teams-js";
import './../App.css';

function getClientSideToken() {

  return new Promise((resolve, reject) => {

      console.log("1. Get auth token from Microsoft Teams");

      microsoftTeams.authentication.getAuthToken({
          successCallback: (result) => {
              //display(result)
              console.log(result);
              resolve(result);
          },
          failureCallback: function (error) {
              reject("Error getting token: " + error);
              console.log('Error getting token');
          }
      });

  });

}

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

getClientSideToken();


  return (
    <div className="App">

      <p>Demo 3</p>

     
    </div>
  );
}

export default App;