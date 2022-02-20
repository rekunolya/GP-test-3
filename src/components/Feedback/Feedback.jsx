import css from './stules.module.css'
import { Button } from '../Button'

export function Feedback(props) {
    return(
        <form className={css.feedback}>
        <div className={css.content}>Name</div>
        <div className={css.namePerson}> {props.name}</div>
        <div className={css.stars}></div>
        <div className={css.content}>Phone</div>
        <input className={css.input} placeholder = 'input phone' type= 'tel'/>
        <div className={css.content}>Comment</div>
        <textarea className={css.textarea}></textarea>
        <Button title = 'Save'/>
        
    </form>
    )

}