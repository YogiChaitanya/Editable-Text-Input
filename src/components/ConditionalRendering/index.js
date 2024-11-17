import {Component} from 'react'
import './index.css'

class ConditionalRendering extends Component {
  state = {
    isClicked: true,
    searchInput: '',
  }

  onClickBtnStatus = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  onChangeUpdatedValue = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {isClicked, searchInput} = this.state

    const output1 = isClicked ? (
      <input
        type="text"
        className="text-input"
        value={searchInput}
        onChange={this.onChangeUpdatedValue}
      />
    ) : (
      <p>{searchInput}</p>
    )

    const buttonText = isClicked ? 'Save' : 'Edit'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Editable Text Input</h1>

          <div className="outputs-container">
            <div>{output1}</div>
            <button
              type="button"
              className="btn1"
              onClick={this.onClickBtnStatus}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ConditionalRendering
