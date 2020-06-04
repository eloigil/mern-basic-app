import React, {Component} from 'react'

import { connect } from 'react-redux'
import { getItems, deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types'

class ItemsLIst extends Component {

  componentDidMount () {
    this.props.getItems()
  }

  onDeleteClick = id => {
    this.props.deleteItem(id)
  }

  render () {
    const { items } = this.props.item

    return (
      <div>
        <ul>
          {items.map(({id, name}) => (
            <li key={id}>
              <span>{name} </span>
              <button
                style={{marginBottom: '2rem', color: "white", backgroundColor: "red", padding: '4px 8px'}}
                onClick={this.onDeleteClick.bind(this, id)}
              >X</button>
            </li>
          ))}
        </ul>
      </div>
    ) 
  }
}

ItemsLIst.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ItemsLIst)