import React, { PureComponent } from 'react'

import Dialog from './components/Dialog'
import { addTodoItem, getTodoList, deleteTodoItem, modifyTodoItem } from './service/todo'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isShow: false,
      list: [],
      modifyIndex: null,
    }
  }

  componentDidMount() {
    this.getList()
  }

  async getList() {
    const list = await getTodoList()
    if (list.length) {
      this.setState({
        ...this.state,
        list,
      })
    }
  }

  handleNew() {
    this.setState({
      ...this.state,
      isShow: true,
    })
  }

  async handleCheck(newValue) {
    const { index, title, description } = newValue
    if (index === null) {
      await addTodoItem(title, description)
      await this.getList()
    } else {
      const id = this.state.list[index].id
      await modifyTodoItem(id, title, description)
      await this.getList()
    }
  }

  handleModify(index) {
    this.setState({
      ...this.state,
      isShow: true,
      modifyIndex: index,
    })
  }

  async handleRemove(item, removeIndex) {
    const result = await deleteTodoItem(item.id)
    if (result?.isSucess) {
      this.setState({
        ...this.state,
        list: this.state.list.filter((item, index) => index !== removeIndex),
      })
    } else {
      alert('remove fail')
    }
  }

  render() {
    return (
      <div className="container">
        <h2>React List</h2>
        <div className="right">
          <button onClick={() => this.handleNew()}>new</button>
        </div>
        <ul className="list">
          {this.state.list.map((item, index) => (
            <li className="list-item" key={item.id}>
              <div className="item-content">
                <div className="title">{item.title}</div>
                <div className="descrip">{item.description}</div>
              </div>
              <div className="center">
                <button
                  style={{
                    marginRight: '8px',
                  }}
                  onClick={() => this.handleModify(index)}
                >
                  modify
                </button>
                <button onClick={() => this.handleRemove(item, index)}>remove</button>
              </div>
            </li>
          ))}
        </ul>
        <Dialog
          isShow={this.state.isShow}
          handleClose={() => this.setState({ ...this.state, isShow: false, modifyIndex: null })}
          handleCheck={(item) => this.handleCheck(item)}
          modifyIndex={this.state.modifyIndex}
          list={this.state.list}
        />
      </div>
    )
  }
}

export default App
