import css from '../App.module.css'
import { nanoid } from 'nanoid'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    options = Object.entries(options)
            return (
                <div className={css.feedback_stat}>
                    <div className={css.btn_thumb} >
                        {options.map(([key]) => {
                             return (
                                <button type="button" name={key} key={nanoid()}  className={css.feedback_btn}
                                    onClick={onLeaveFeedback}>{key}</button>   
                             )
                        })}
                    </div>

                </div>
            )  
}