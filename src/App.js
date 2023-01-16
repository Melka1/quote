import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      quote : [{text:"",author:""}],
      rand:0
    }
  }
  handleRand =()=>{ this.setState({rand:Math.floor(Math.random()*this.state.quote.length)})
  }
  componentDidMount(){
    fetch("https://type.fit/api/quotes")
      .then(res=> res.json())
      .then(data=>{
        this.setState({quote:data})
    });
  }
  render(){
    let rand = this.state.quote.length!=1?Math.floor(Math.random()*1500):0
    let obj = this.state.quote[rand]
    console.log(Object.values(obj)[0], rand)
    
     return (
      <div id="quote-box">
        <h2 id="text">{Object.values(obj)[0]}</h2>
        <h4 id="author">--&lt; {!Object.values(obj)[1]?"Unknown Author":Object.values(obj)[1]} &gt;--</h4>
        <button id="new-quote" onClick={this.handleRand}>New Quote</button>
        <div className="social"> 
         <a id="tweet-quote" href="twitter.com/intent/tweet">
           <i className="fa-brands fa-twitter" target="_black"></i></a>
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-tiktok"></i></a>
         </div>
      </div>
    )
  }
}

export default App;
