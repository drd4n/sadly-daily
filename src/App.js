// App.js
import React, { Component } from 'react';
import Header from './component/Header';
import MessageList from './component/MessageList';
import MessageBox from './component/MessageBox';
import firebase from 'firebase';
class App extends Component {
  constructor(props){super(props);
    var Config = {
      apiKey: "AIzaSyDENhk0XYLoSJqZ9ka5akrIATUV_eTHIN4",
      authDomain: "sadly-daily.firebaseapp.com",
      databaseURL: "https://sadly-daily.firebaseio.com",
      projectId: "sadly-daily",
      storageBucket: "sadly-daily.appspot.com",
      messagingSenderId: "48224866245",
      appId: "1:48224866245:web:db78b2df608f42a2"
    };
  firebase.initializeApp(Config);
}

render() {
  return (
    <div className="container">
      <Header title="Simple Firebase App" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }
}
export default App;