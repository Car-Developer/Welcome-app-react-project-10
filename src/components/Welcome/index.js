import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  buttonText = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
    }))
  }

  onClickButton = () => {
    const {isSubscribe} = this.state

    if (isSubscribe === true) {
      return 'Subscribed'
    }
    return 'Subscribe'
  }

  render() {
    const text = this.onClickButton()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thankyou! Happy Learning</p>
        <div>
          <button className="button" type="button" onClick={this.buttonText}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
