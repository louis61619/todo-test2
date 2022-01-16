import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

export class Dialog extends PureComponent {
  static propTypes = {
    isShow: PropTypes.bool,
    handleClose: PropTypes.func,
    handleCheck: PropTypes.func,
    modifyIndex: PropTypes.number,
    list: PropTypes.array,
  }

  static defaultProps = {
    isShow: false,
    handleClose: () => {},
    handleCheck: () => {},
  }

  constructor() {
    super()
    this.state = {
      loading: false,
      title: '',
      description: '',
    }
  }

  componentDidUpdate(preProps) {
    if (this.props.modifyIndex !== preProps.modifyIndex) {
      this.setState({ ...this.props.list[this.props.modifyIndex] })
    }
  }

  handleClose(e) {
    this.props.handleClose()
    this.setState({
      loading: false,
      title: '',
      description: '',
    })
  }

  handleClick() {
    this.setState({
      ...this.state,
      loading: true,
    })
    if (!this.state.title && !this.state.description) {
      alert(`value can't not be null`)
      return
    }
    const result = this.props.handleCheck({
      title: this.state.title,
      description: this.state.description,
      index: this.props.modifyIndex,
    })
    Promise.resolve(result).then(() => {
      this.handleClose()
    })
  }

  render() {
    return (
      <>
        {this.props.isShow && (
          <div className="dialog" onClick={(e) => this.handleClose(e)}>
            <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
              <Input
                label="title"
                value={this.state.title}
                onChange={(e) =>
                  this.setState({
                    ...this.state,
                    title: e.target.value,
                  })
                }
              />
              <Input
                label="description"
                value={this.state.description}
                onChange={(e) =>
                  this.setState({
                    ...this.state,
                    description: e.target.value,
                  })
                }
              />
              <div className="right">
                <button disabled={this.state.loading} onClick={() => this.handleClick()}>
                  {this.state.loading ? 'loading' : 'confirm'}
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Dialog
