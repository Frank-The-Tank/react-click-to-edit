import React from 'react'
import './styles.css'

const makeContentEditable = (WrappedComponent) => class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.children,
      onEdit: false,
    }
    this.enterEditMode = this.enterEditMode.bind(this)
    this.leaveEditMode = this.leaveEditMode.bind(this)
    this.changeValue = this.changeValue.bind(this)
  }
  enterEditMode() {
    this.setState({
      ...this.state,
      onEdit: true,
    })
  }
  leaveEditMode(e) {
    if(e.keyCode === 13 || e.charCode == 13){
      this.setState({
        ...this.state,
        onEdit: false,
      })
    }
  }
  changeValue(e) {
    this.setState({
      ...this.state,
      value: e.target.value,
    })
  }
  render() {
    const { customInputClass } = this.props
    return (
      <section onClick={this.enterEditMode} >
        {
          (this.state.onEdit)
          ? <input
              type='text'
              autoFocus
              value={this.state.value}
              className={customInputClass}
              onChange={this.changeValue}
              onKeyPress={this.leaveEditMode}
            />
          : <span>{this.state.value}</span>
        }
      </section>
    )
  }
}

const labelize = (props) => <section>{props.children}</section>

const ClickToEdit = makeContentEditable(labelize)

export default ClickToEdit