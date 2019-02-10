import React, { Component } from 'react';
import Card from './Card.js';

class App extends Component {
  cards = [
    {
      screenname: "Elon Musk",
      username: "elonmusk",
      posttext: "LA is so beautiful after the rain.",
      postinfo: "5:01pm - 13 Jan 2019",
      detailretweets: "6,389 ",
      detaillikes: "123,998 ",
      iconcomments: "2.8K",
      iconretweets: "6.4K",
      iconlikes: "124K",
    },
    {
      screenname: "Alexa Chung",
      username: "alexa_chung",
      posttext: "When you see your Uber approaching driving erratically and think “that’s my baby”.",
      postinfo: "5:13 AM - 9 Feb 2019",
      detailretweets: "148 ",
      detaillikes: "1,102 ",
      iconcomments: "4",
      iconretweets: "148",
      iconlikes: "1.1K",
    },
    {
      screenname: "Archillect",
      username: "archillect",
      posttext: "",
      postinfo: "12:40 AM - 10 Feb 2019",
      detailretweets: "26 ",
      detaillikes: "260 ",
      iconcomments: "1",
      iconretweets: "26",
      iconlikes: "260",
    }
  ];
  cardpos = 0;

  constructor(props) {
    super(props);
    this.state = this.cards[this.cardpos];
    this.cardRight = this.cardRight.bind(this);
    this.cardLeft = this.cardLeft.bind(this);
  }

  cardRight() {
    this.cardpos = (this.cardpos === this.cards.length - 1 ? 0 : this.cardpos + 1);
    this.setState(this.cards[this.cardpos]);
  }

  cardLeft() {
    this.cardpos = (this.cardpos === 0 ? this.cards.length - 1 : this.cardpos - 1);
    this.setState(this.cards[this.cardpos]);
  }

  rightArrow() {
    return (
      <button className="app-arrows" onClick={this.cardRight}>&gt;</button>
    );
  }


  leftArrow() {
    return (
      <button className="app-arrows" onClick={this.cardLeft}>&lt;</button>
    );
  }

  render() {
    return (
      <div className="app">
        {this.leftArrow()}
        <Card {...this.state}></Card>
        {this.rightArrow()}
      </div>
    );
  }
}

export default App;
