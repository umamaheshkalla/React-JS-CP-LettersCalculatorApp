import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInputPhrase: ''}

  onCount = event => {
    const {value} = event.target

    this.setState({searchInputPhrase: value})
  }

  render() {
    const {searchInputPhrase} = this.state

    return (
      <div className="bg-container">
        <div className="description-container">
          <h1 className="heading">
            Calculate the
            <br /> Letters you enter
          </h1>
          <form className="form-container">
            <label className="label" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              className="input-box"
              id="phraseText"
              type="text"
              onChange={this.onCount}
              placeholder="Enter the phrase"
            />
          </form>
          <p className="letters-count">
            No.of letters: {searchInputPhrase.length}
          </p>
        </div>
        <img
          className="calculator-image"
          alt="calculator-img"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    )
  }
}

export default LettersCalculator
