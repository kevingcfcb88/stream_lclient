import React from 'react';

class GoogleAuth extends React.Component{
  state = {isSignedIn:null};

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '91880600204-72us7fpaaqan3oigmi32nnoup7if2f0n.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()});
  }

  renderAuthButton(){
    if(this.state.isSignedIn === null){
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={e => this.auth.signOut()}>
          <i className="google icon" />
            Sign Out          
        </button>
      );
    }else{
      return (
        <button className="ui green google button" onClick={e => this.auth.signIn()}>
          <i className="google icon" />
            Sign In          
        </button>
      );
    }
  }

  render(){
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;