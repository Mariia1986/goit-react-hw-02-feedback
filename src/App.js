import React, { Component } from 'react'
import "./App.css";

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onClickGood=()=>{
    this.setState(prevState=>{
      return {good: prevState.good+1}
    }
      )
  }
  onClickNeutral=()=>{
    this.setState(prevState=>{
      return {neutral: prevState.neutral+1}
    }
      )

  }

  onClickBad=()=>{
    this.setState(prevState=>{
      return {bad: prevState.bad+1}
    })
  }
  countTotalFeedback=()=>{
    let total=0;
    for (let key in this.state){
      total+=this.state[key];
    }
   return total
  }
  countPositiveFeedbackPercentage(totalFeedback) {
    return totalFeedback === 0
      ? 0
      : Math.round((this.state.good * 100) / totalFeedback);
  }

render(){
const { good,  neutral, bad}=this.state
const totalFeedback=this.countTotalFeedback()
const percentage=this.countPositiveFeedbackPercentage(totalFeedback)

  return(

  <div className="App">
    <div>
      <h2>Please leave feedback</h2>
      <button type="button" onClick={this.onClickGood}>Good</button>
      <button type="button" onClick={this.onClickNeutral} >Neutral</button>
      <button type="button" onClick={this.onClickBad}>Bad</button>
      </div>
      <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback: {percentage} </p>
      </div>
  </div>

  )
}

}



export default App;
