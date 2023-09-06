import css from '../App.module.css'
export const Controls = ({ onLeaveFeedback1, onLeaveFeedback2, onLeaveFeedback3 }) => {
    console.log(onLeaveFeedback1)
    return (
         <div className={css.btn_thumb}>
            <button type="button" className={css.feedback_btn} onClick={onLeaveFeedback1}>Good</button>
            <button type="button" className={css.feedback_btn} onClick={onLeaveFeedback2}>Neutral</button>
            <button type="button" className={css.feedback_btn} onClick={onLeaveFeedback3}>Bad</button>
          </div>
    )
}