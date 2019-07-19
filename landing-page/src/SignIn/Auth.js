import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"; 
import Modal from './Modal';

firebase.initializeApp({
  apiKey: "AIzaSyAACLP6qdgePIo4yhD9EtZP-iA6mfYLwLs",
  authDomain: "xe-bid.firebaseapp.com"
})

class Auth extends Component{
  state = { 
    isSignedIn: false,
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],

    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged( (user) => {
      this.setState({isSignedIn: !!user})

      console.log(user);

    })
  }

  render() {
    return (
      <div className="Auth">
        {this.state.isSignedIn ? (
          <div>Signed In!!
          <img alt="profile-pic" src={firebase.auth().currentUser.photoURL}/>
          </div>
        ):(
          <StyledFirebaseAuth
           style = {{width: '50px'}}
           uiConfig={this.uiConfig}
           firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
  
}


export default Auth;
