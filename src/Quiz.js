import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')


// const isQuizEnd = () => {

// }

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};
    }

    showNextQuestion (){
       this.setState(prevState => ({
           quiz_position: prevState.quiz_position + 1,
       }))
    }

    //Render is just a function. Can run normal JS in it...
    render () {
        //Gets called each time rendered
        const isQuizEnd = this.state.quiz_position -1 === quizData.quiz_questions.length;
        if (isQuizEnd) {
            return(
                <QuizEnd style={{display: true ? "" : "none"}}/>
            )
        }
        else {
            return(
                <div>
                    <QuizQuestion
                        quiz_question={quizData.quiz_questions[this.state.quiz_position -1]}
                        showNextQuestionHandler={this.showNextQuestion.bind(this)}
                    />
                </div>
            )
        }
    }
}

export default Quiz