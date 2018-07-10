import React, {Component} from 'react'


class QuizQuestionButton extends Component {

    handleClick () {
        this.props.clickHandler(this.props.button_text)
    }

    render() {
        return(
            //Parent is Ul so only need the li and button
            //This is cool, but might be hard to keep a track of

                //Not sure what the bind does?
            <li>
                <button key={this.props.key} onClick={this.handleClick.bind(this)}>
                    {this.props.button_text}
                </button>
            </li>
        );
    }
}

export default QuizQuestionButton;

