import React, {Component} from 'react'

class ItemsLIst extends Component {
  state = {
    items: [
      { id: '430c3c22-a4d0-11ea-bb37-0242ac130002', name: 'eloi'},
      { id: '494dc7c2-a4d0-11ea-bb37-0242ac130002', name: 'sarah'},
      { id: '5b63cf10-a4d0-11ea-bb37-0242ac130002', name: 'nelson'},
      { id: '60cc768c-a4d0-11ea-bb37-0242ac130002', name: 'shawn'}
    ]
  }

  render () {
    const { items } = this.state

    return (
      <div>
        <button
          style={{marginBottom: '2rem', color: "white", backgroundColor: "black", padding: '6px'}}
          onClick={() => {
            const name = prompt('Enter item:')

            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: `${Math.floor(Math.random()*1000)}`, name } ]
              }))
            }
          }}
        >Add Item!</button>
        <ul>
          {items.map(({id, name}) => (
            <li key={id}>
              <p>{name}</p>
              <button
                style={{marginBottom: '2rem', color: "white", backgroundColor: "red", padding: '6px'}}
                onClick={() => {
                  if (name) {
                    this.setState(state => ({
                      items: this.state.items.filter(item => item.id !== id)
                    }))
                  }
                }}
              >Delete</button>
            </li>
          ))}
        </ul>
      </div>
    ) 
  }
}

export default ItemsLIst