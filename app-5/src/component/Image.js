import React, {Component} from 'react'

class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} />
        <div>Wolf</div>
      </div>
    )
  }
}

export default Image