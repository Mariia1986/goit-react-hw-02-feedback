import React, { Component } from "react";
import "./App.css";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickFeedback = (event) => {
    const option = event.target.innerText.toLowerCase();
    this.setState((prevState) => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    let total = 0;
    for (let key in this.state) {
      total += this.state[key];
    }
    return total;
  };
  countPositiveFeedbackPercentage(totalFeedback) {
    return totalFeedback === 0
      ? 0
      : Math.round((this.state.good * 100) / totalFeedback);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(totalFeedback);
    const onClickFeedback = this.onClickFeedback;

    return (
      <div className="App">
        <Section title={"Please leave feedback"}>
         
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={onClickFeedback}
         /> {totalFeedback ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={percentage}
          /> :
          <Notification message="No feedback given" />}
        </Section>
      </div>
    );
  }
}

export default App;
