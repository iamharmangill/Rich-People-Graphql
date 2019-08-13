import React, { Component } from 'react'
import UpdateCar from './UpdateCar'

import { Button, ListItem, ListItemText } from '@material-ui/core'
import RemoveCar from './RemoveCar'


class Car extends Component {
  state = {
    editMode: false,
    id: this.props.id || '',
    year: this.props.year || '',
    make: this.props.make || '',
    model: this.props.model || '',
    price: this.props.price || ''
  }

  handleEditButtonClick = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  handleButtonClick = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render() {
    const { editMode, id, year, make, model, price } = this.state
    // const fullName = `${firstName} ${lastName}`
    const fullName = `${make} ${model}`

    return (
      <div>
        {
          editMode ?
            <UpdateCar
              editMode={editMode}
              id={id}
              year={year}
              make={make}
              model={model}
              price={price}
              onButtonClick={this.handleButtonClick}
              onInputChange={this.handleInputChange}
            />
            :
            <ListItem>
              <ListItemText
                primary={fullName}
              />
                {/* {firstName} {lastName} */}
                <Button
                  onClick={e => this.handleButtonClick()}
                  variant='contained'
                  style={{ margin: '5px' }}
                >
                  Edit
                </Button>
              <RemoveCar
                id={id}
                year={year}
                make={make}
                model={model}
                price={price}
              />
            </ListItem>
        }
      </div>
    )
  }
}

export default Car