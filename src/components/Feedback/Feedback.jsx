import css from './stules.module.css';
import React from 'react';
import { Button } from '../Button'

export class Feedback extends React.Component {
    state = {
        value: "",
        isFeedbackVisible: false,
        buttonTitle: "Save",
    }
 
    personOnClick = () => {
        this.setState((prevstate) => ({
          isFeedbackVisible: !prevstate.isFeedbackVisible
        }));
      }

    changeInput = (ev) => {
        this.setState({value: ev.target.value});
    }

    buttonOnClick = () => {

    }

    render() {
        return(
            <form className={css.feedback}>
            <div className={css.content}>Name</div>
            <div className={css.namePerson}>Name</div>
            <div className={css.stars}></div>
            <div className={css.content}>Phone</div>
            <input className={css.input} placeholder = 'input phone' type= 'tel' onChange={this.changeInput}/>
            <div className={css.content}>Comment</div>
            <textarea className={css.textarea}></textarea>
            <Button title = {this.state.buttonTitle} onClick = {this.buttonOnClick}/>
            </form>
        )
    }


}