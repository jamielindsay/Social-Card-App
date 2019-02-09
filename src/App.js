import React, { Component } from 'react';
import './App.css';

class Card extends Component {
  topBar() {
    return (
      <div className="top-bar">
        <div className="user-info">
          <img className="profile-pic" src={require("./profile_pic.JPG")} alt="Profile"></img>
          <div className="profile-names">
            <h3 className="screen-name">Elon Musk</h3>
            <h4 className="username">@elonmusk</h4>
          </div>
        </div>
        <div className="misc-actions">
          <button className="follow">Follow</button>
          <button className="expand">V</button>
        </div>
      </div>
    )
  }

  mainPost() {
    return (
      <div className="main-post">
        <h4 className="post-text">LA is so beautiful after the rain.</h4>
        <img className="post-pic" src={require("./post_pic.jpg")} alt="Posted"></img>
        <h6 className="post-info">5:01pm - 13 Jan 2019</h6>
      </div>
    )
  }

  socialStats() {
    return (
      <div className="social-stats">
        <div className="view-detail">
          <div className="detail-retweets">
            <h7>6,389 </h7>
            <h6>Retweets</h6>
          </div>
          <div className="detail-likes">
            <h7>123,998 </h7>
            <h6>Likes</h6>
          </div>
          <div className="detail-users">
            <img src={require("./profile_pic2.jpg")} alt="Profile"></img>
            <img src={require("./profile_pic2.jpg")} alt="Profile"></img>
            <img src={require("./profile_pic2.jpg")} alt="Profile"></img>
            <img src={require("./profile_pic2.jpg")} alt="Profile"></img>
            <img src={require("./profile_pic2.jpg")} alt="Profile"></img>
          </div>
        </div>
        <div className="view-icon">
          <div className="icon-comments">
            <img src={require("./comment.svg")} alt="Comments"></img>
            <h5>2.8K</h5>
          </div>
          <div className="icon-retweets">
            <img src={require("./retweet.svg")} alt="Retweets"></img>
            <h5>6.4K</h5>
          </div>
          <div className="icon-likes">
            <img src={require("./like.svg")} alt="Likes"></img>
            <h5>124K</h5>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="card">
      {this.topBar()}
      {this.mainPost()}
      {this.socialStats()}
      </div>
    )
  }
}

class App extends Component {
  render() {
    const c = <Card></Card>
    return (
      c
    );
  }
}

export default App;
