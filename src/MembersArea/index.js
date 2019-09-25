import React, { Component } from 'react';
import authentification from 'react-azure-adb2c';
import decoding from 'jwt-decode';

export default class MembersArea extends Component {
  render() {
    var token = authentification.getAccessToken();
    var decodedToken = decoding(token);
    console.log("token : ");
    console.log(token);
    console.log("decoded token : ")
    console.log(decodedToken);
    return (
      <div></div>
    );
  }
}