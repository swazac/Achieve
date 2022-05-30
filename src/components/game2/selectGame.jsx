import React, { Component } from "react";
import './selectGame.css';
import {Data} from "./data";

export class SelectGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAnswer: null,
      currentIndex: 0,
      options: [],
      quizEnd: false,
      score: 0,
      disabled: true,
    };
  }

  componentDidMount() {
    this.loadQuiz();
  }

  //Component that holds the current quiz
  loadQuiz = () => {
    const { currentIndex } = this.state; //get the current question index
    this.setState(() => {
      return {
        question: Data[currentIndex].question,
        options: Data[currentIndex].options,
        answer: Data[currentIndex].answer,
      };
    });
  };
 
  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          question: Data[currentIndex].question,
          options: Data[currentIndex].options,
          answer: Data[currentIndex].answer,
        };
      });
    }
  }

  //Check the answer
  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  nextQuestionHander = () => {
    const { userAnswer, answer, score } = this.state;
    this.setState({
      currentIndex: this.state.currentIndex + 1,
    });

    //Check if correct answer and increment score
    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }
  };

  finishHandler = () => {
    const { score } = this.state;
    if (this.state.currentIndex === Data.length - 1) {
      this.setState({
        quizEnd: true,
        score: score + 1
      });
    }
  };

  render() {
    const { question, options, currentIndex, userAnswer, quizEnd } = this.state; //get the current state

    if (quizEnd) {
      return (
        <div className="centered">
          <h2>Game Over. Final score is {this.state.score} points</h2>
          <h3>The correct Answers for the quiz are</h3>
          <ul>
            {Data.map((item, index) => (
              <li className="options" key={index}>
                Question: {item.question}
                <br></br>
                Answer: {item.answer}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <div className="centered">
        <span className="question">{`Question ${currentIndex + 1} of ${
          Data.length
        }`}</span>
        <h2>{question}</h2>
        {options.map(
          (
            option //for each option, new paragraph
          ) => (
            <p
              key={option.id}
              className={` options
                ${userAnswer === option ? "selected" : null}
                `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          )
        )}
        {currentIndex < Data.length - 1 && (
          <button
            className="button btn btn-primary"
            disabled={this.state.disabled}
            onClick={this.nextQuestionHander}
          >
            Next Question
          </button>
        )}
        {currentIndex === Data.length - 1 && (
          <button
            className="button btn btn-primary"
            disabled={this.state.disabled}
            onClick={this.finishHandler}
          >
            Finish
          </button>
        )}
      </div>
    );
  }
}

export default SelectGame;
