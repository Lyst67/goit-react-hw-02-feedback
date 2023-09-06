import css from '../App.module.css'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    options = Object.entries(options)
    // const { good, neutral, bad } = options
    return (
        options.map(([key, value], index) => {
        return (
            <div key={index}>
            <p key={index} >{key}: <span>{value}</span></p>
        </div>   
            )
    })
    )
}