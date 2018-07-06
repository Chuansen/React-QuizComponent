import React, {Component} from 'react'


class QuizQuestionButton extends Component {
    render() {
        return(
            //Parent is Ul so only need the li and button
            //This is cool, but might be hard to keep a track of
            <li>
                <button>
                    {this.props.button_text}
                </button>
            </li>
        );
    }
}

export default QuizQuestionButton;

