import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBcChLoo-IjiYpNWu6_5RPYZnEbR7x1LZA",
  authDomain: "react-85fdf.firebaseapp.com",
  databaseURL: "https://react-85fdf.firebaseio.com",
  projectId: "react-85fdf",
  storageBucket: "",
  messagingSenderId: "764037073534",
  appId: "1:764037073534:web:b0f5ac6cc2423cc9"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
