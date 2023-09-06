import { Component } from "react"
import { Controls } from "./Controls/Controls"
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import css from './App.module.css'

class App extends Component  {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  // options = Object.entries(this.state)
  // onLeaveFeedback = (key) => {
  //   this.setState((prevState, [key, value]) => ({
  //     key: prevState.value + 1,
  //   }))
  // }
  
  onLeaveFeedback1 = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }))
  }
 onLeaveFeedback2 = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
  }
  onLeaveFeedback3 = () => {
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
          <Controls 
            onLeaveFeedback1= { this.onLeaveFeedback1}
          onLeaveFeedback2= {this.onLeaveFeedback2}
          onLeaveFeedback3= {this.onLeaveFeedback3}
           />
          <div className={css.feedback_stat}>
            <h2 className={css.stat_head}>Statistics</h2>
           
            <FeedbackOptions
              options={this.state}
            // onLeaveFeedback={ }
            />
          </div>
         
    </div >
       </>
     
  )
  }
 
};

export default App
