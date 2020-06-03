import React from 'react';

class GoogleAuth extends React.Component{

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '91880600204-72us7fpaaqan3oigmi32nnoup7if2f0n.apps.googleusercontent.com',
        scope: 'email'
      })
    });
  }

  render(){
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;