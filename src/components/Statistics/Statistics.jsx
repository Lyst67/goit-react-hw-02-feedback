import css from '../App.module.css'
import { nanoid } from 'nanoid'

export const Statistics = ({ options }) => {
    options = Object.entries(options)
    return (
        <>
         <h2 className={css.stat_head}>Statistics</h2>  
                    {options.map(([key, value]) => { 
                    return (
                                <div key={nanoid()}>
                                   <p >{key}: <span>{value}</span></p>
                                </div>
                            )})
            
                    } 
        </>
        
    )
}