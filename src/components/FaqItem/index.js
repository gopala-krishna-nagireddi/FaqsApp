// Write your code here.

import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isAnsDisplayed: false}

  onShowBtn = () => {
    this.setState(prevState => ({isAnsDisplayed: !prevState.isAnsDisplayed}))
  }

  render() {
    const {eachFaq} = this.props
    const {isAnsDisplayed} = this.state
    const {questionText, answerText} = eachFaq

    const signImg = isAnsDisplayed
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isAnsDisplayed ? 'minus' : 'plus'

    return (
      <li className="faq-item">
        <div className="question-container">
          <h2 className="question">{questionText}</h2>
          <img src={signImg} alt={altText} onClick={this.onShowBtn} />
        </div>
        {isAnsDisplayed && (
          <div className="answer-container">
            <hr />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
