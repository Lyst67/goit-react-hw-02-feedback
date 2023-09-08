import { Component } from "react"
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from "./Statistics/Statistics"
import { Section } from "./Section/Section"
import { Notification } from "components/Notification/Notification"
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
    if (good > 0) { return Math.round((good * 100) / this.countTotalFeedback()) };
    return 0;
  }

 
  render() {
  
    return (
       <>
         <div className={css.feedback_card}>
          <Section title="Please leave feedback">
             <FeedbackOptions
                     options={this.state}
                     onLeaveFeedback={this.onLeaveFeedback }
                   /> 
          </Section>
          <Section title="Statistics">
            {!this.countTotalFeedback() ? (
              <Notification message="There is no feedback"
           /> 
            ) : (
            <Statistics
                     good={this.state.good}
                     neutral={this.state.neutral}
                     bad={this.state.bad}
                     total={this.countTotalFeedback()}
                     positivePercentage={this.countPositiveFeedbackPercentage()}
                   />    
            )}
           
            
                  </Section>
                   
                    
                
          </div >
       </>  
     )
  }
};

export default App
