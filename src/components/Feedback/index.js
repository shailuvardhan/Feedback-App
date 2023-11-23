import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onClickedEmojiButton = () => {
    this.setState({isClicked: true})
  }

  emojisReviewView = () => {
    const {resources} = this.props
    return (
      <div className="card-container">
        <h1 className="title">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-container">
          {resources.emojis.map(eachItem => (
            <button
              type="button"
              className="btn"
              onClick={this.onClickedEmojiButton}
            >
              <li key={eachItem.id} className="list">
                <img
                  alt={eachItem.name}
                  className="img"
                  src={eachItem.imageUrl}
                />
                <p className="list-name">{eachItem.name}</p>
              </li>
            </button>
          ))}
        </ul>
      </div>
    )
  }

  thankyouView = () => {
    const {resources} = this.props
    return (
      <div className="card-container">
        <img
          alt=" love emoji"
          className="love-img"
          src={resources.loveEmojiUrl}
        />
        <h1 className="title">Thank You</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="bg-container">
        {isClicked ? this.thankyouView() : this.emojisReviewView()}
      </div>
    )
  }
}

export default Feedback
