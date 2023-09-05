import { Component } from "react"
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import css from './App.module.css'

class App extends Component  {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  handleGoodCount = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }))
  }
  handleNeutralCount = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
  }
  handleBadCount = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }))
  }
 
  render() {
    return (
       <>
        <div className={css.feedback_card}>
          <h1 className={css.feedback_head}>
            Please leave feedback
          </h1>
          <div className={css.btn_thumb}>
            <button type="button" className={css.feedback_btn} onClick={this.handleGoodCount}>Good</button>
            <button type="button" className={css.feedback_btn} onClick={this.handleNeutralCount}>Neutral</button>
            <button type="button" className={css.feedback_btn} onClick={this.handleBadCount}>Bad</button>
          </div>
          <div className={css.feedback_stat}>
            <h2 className={css.stat_head}>Statistics</h2>
            <p>Good: <span>{this.state.good}</span></p>
            <p>Neutral: <span>{this.state.neutral}</span></p>
            <p>Bad: <span>{this.state.bad}</span></p>
            {/* <FeedbackOptions
              options={ }
            onLeaveFeedback={ }
            /> */}
          </div>
         
    </div >
       </>
     
  )
  }
 
};

export default App
