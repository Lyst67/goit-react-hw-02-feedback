import { Component } from "react"
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from "./Statistics/Statistics"
import css from './App.module.css'

class App extends Component  {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = ({ target: { name } }) => {
    this.setState((prevState) => ({ 
        [name]: prevState[name] + 1,
      })) 
    }
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, elem) => { return acc += elem }, 0);
  }
  countPositiveFeedbackPercentage = () => {
    let good = this.state.good
    if (good > 0) { return Math.round(good * 100) / this.countTotalFeedback() };
    return 0;
  }

 
  render() {
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
    console.log(this.countTotalFeedback())
    console.log(this.countPositiveFeedbackPercentage())
    return (
       <>
        <div className={css.feedback_card}>
            <h1 className={css.feedback_head}>Please leave feedback</h1>
                <FeedbackOptions
                  options={this.state}
                onLeaveFeedback={this.onLeaveFeedback }
          /> 
          <Statistics
              options={this.state}
          //  good={this.state.good}
          //   neutral={this.state.neutral}
          //   bad={this.state.bad}
          //   total={ }
          //   positivePercentage={ }
          ></Statistics>
         </div >
       </>  
     )
  }
};

export default App
