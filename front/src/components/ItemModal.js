import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'

class ItemModal extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  handleSubmit = e => {
    e.preventDefault()
    const newItem = {
      id: `${Math.floor(Math.random()*1000)}`,
      name: this.state.name
    }

    this.props.addItem(newItem)

    this.toggle()
  }

  render () {
    return (
      <div>
        <button
          style={{marginBottom: '2rem', color: "white", backgroundColor: "black", padding: '4px 12px'}}
          onClick={this.toggle}
        >Add Item</button>
        {
          !this.state.modal ? null:
          <form onSubmit={this.handleSubmit}>
            <label>Item:</label>
            <input
              type="text"
              name="name"
              id="item"
              placeholder="Add item"
              onChange={this.handleNameChange}
            />
            <button
              type="submit"
              style={{marginBottom: '2rem', color: "white", backgroundColor: "green", padding: '4px 12px'}}
            >Add</button>
          </form>
        }
      </div>
    )
  }
}

const mapStateProps = state => ({
  item: state.item
})

export default connect(mapStateProps, { addItem })(ItemModal)