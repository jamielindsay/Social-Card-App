import React, { Component } from 'react';
import Card from './Card.js';

class App extends Component {
  render() {
    let props = {
      screenname: "Elon Musk",
      username: "elonmusk",
      posttext: "LA is so beautiful after the rain.",
      postinfo: "5:01pm - 13 Jan 2019",
      detailretweets: "6,389 ",
      detaillikes: "123,998 ",
      iconcomments: "2.8K",
      iconretweets: "6.4K",
      iconlikes: "124K",
    }
    const c = <Card {...props}></Card>
    return (
      c
    );
  }
}

export default App;
