import React, { Component } from 'react';
import './App.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  topBar() {
    return (
      <div className="top-bar">
        <div className="user-info">
          <img className="profile-pic" src={require("./profile_pic.JPG")} alt="Profile"></img>
          <div className="profile-names">
            <h3 className="screen-name">{this.props.screenname}</h3>
            <h4 className="username">@{this.props.username}</h4>
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
        <h4 className="post-text">{this.props.posttext}</h4>
        <img className="post-pic" src={require("./post_pic.jpg")} alt="Posted"></img>
        <h6 className="post-info">{this.props.postinfo}</h6>
      </div>
    )
  }

  socialStats() {
    return (
      <div className="social-stats">
        <div className="view-detail">
          <div className="detail-retweets">
            <h7>{this.props.detailretweets}</h7>
            <h6>Retweets</h6>
          </div>
          <div className="detail-likes">
            <h7>{this.props.detaillikes}</h7>
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
            <h5>{this.props.iconcomments}</h5>
          </div>
          <div className="icon-retweets">
            <img src={require("./retweet.svg")} alt="Retweets"></img>
            <h5>{this.props.iconretweets}</h5>
          </div>
          <div className="icon-likes">
            <img src={require("./like.svg")} alt="Likes"></img>
            <h5>{this.props.iconlikes}</h5>
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

export default Card;