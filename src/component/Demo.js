import React from 'react';
import * as microsoftTeams from "@microsoft/teams-js";
import './../App.css';




function getClientSideToken() {

  return new Promise((resolve, reject) => {

    console.log("1. Get auth token from Microsoft Teams");

    microsoftTeams.authentication.getAuthToken({
      successCallback: (result) => {
        //display(result)
        //console.log(result);
        resolve(result);
      },
      failureCallback: function (error) {
        reject("Error getting token: " + error);
        console.log('Error getting token');
      }
    });

  });

}

// 2. Exchange that token for a token with the required permissions
//    using the web service (see /auth/token handler in app.js)
function getServerSideToken(clientSideToken) {

  //display("2. Exchange for server-side token");

  return new Promise((resolve, reject) => {

    microsoftTeams.getContext((context) => {

      fetch('/auth/token', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'tid': context.tid,
          'token': clientSideToken
        }),
        mode: 'cors',
        cache: 'default'
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            reject(response.error);
          }
        })
        .then((responseJson) => {
          if (responseJson.error) {
            reject(responseJson.error);
          } else {
            const serverSideToken = responseJson;
            //display(serverSideToken);
            resolve(serverSideToken);
          }
        });
    });
  });
}


function useServerSideToken(data) {

  //display("3. Call https://graph.microsoft.com/v1.0/me/ with the server side token");

  return fetch("https://graph.microsoft.com/v1.0/me/",
    {
      method: 'GET',
      headers: {
        "accept": "application/json",
        "authorization": "bearer " + data
      },
      mode: 'cors',
      cache: 'default'
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw (`Error ${response.status}: ${response.statusText}`);
      }
    })
    .then((profile) => {
      return profile
    });

}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      client_token: 'client token',
      server_token: 'server token',
      profile: {},
      theme: ''
    }

  }

  componentDidMount() {
   
    microsoftTeams.initialize();

    microsoftTeams.getContext(function (context) {

      if (context && context.theme) {

        console.log(context);
        this.setState({
          theme: context.theme
        })
      } else {
        console.log('no theme');
      }
    });

    getClientSideToken()
      .then((clientSideToken) => {

        this.setState((prevState, props) => {
          return {client_token: clientSideToken}
        })
    
        return getServerSideToken(clientSideToken);
      })
      .then((serverSideToken) => {

        console.log(serverSideToken);

        this.setState((prevState, props) => {
          return {server_token: serverSideToken}
        })
        return useServerSideToken(serverSideToken);
      })
      .then((data) => {
        console.log(data);
   
        this.setState((prevState, props) => {
          return {profile: data}
        })
      })
      .catch((err) => {
        console.log(err)
      })

  };



  render() {
    return (
      <div> 
        <div className="container">
        <h5 className="text-left">Demo 1 tokens</h5>

        </div>
        

        <div className="container">

          <div className="row">          
            <div className="col-sm-3">
              Theme
          </div>
            <div className="col-sm-9">
            {this.state.theme}
          </div>         
          </div>
        
          <div className="row">          
            <div className="col-sm-3">
            client token
          </div>
            <div className="col-sm-9">
            {this.state.client_token}
          </div>         
          </div>
     
          <div className="row">          
            <div className="col-sm-3">
            server token
          </div>
            <div className="col-sm-9">
            {this.state.server_token}
          </div>         
          </div>
     
     <br/>
          <div className="container">
          <h5 className="text-left">Profile</h5>
          </div>
     
          <div className="row">          
            <div className="col-sm-3">
            <p>Name:</p>
            <p>Email:</p>
            <p>id:</p>
          </div>
            <div className="col-sm-9">
            <p>{this.state.profile.displayName}</p>
            <p>{this.state.profile.mail}</p>
            <p>{this.state.profile.id}</p>
          </div>         
          </div>
     
        
        </div>
      </div>
    );
  }
}

export default App;