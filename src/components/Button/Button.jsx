import css from './stules.module.css'

export function Button(props){
    return (
        <button className= {css.button}>
        {props.title}
    </button>
    )

}