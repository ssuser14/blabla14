import React, { Component } from 'react';
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import TodoFilter from './Components/TodoFilter'

class App extends Component {
  constructor () {
    super()

    this.state = {
      itemsToRender: [],
      currFilter: 'All',
      items: [
        {
          name: 'Sarah',
          isDone: false,
        },
        {
          name: 'Moshe',
          isDone: true,
        }
      ]
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onRemove = this.onRemove.bind(this)
    this.onFilterChange = this.onFilterChange.bind(this)
    this.updateItemsToRender = this.updateItemsToRender.bind(this)
  }
  componentWillMount () {
    this.onFilterChange('All')
  }
  onSubmit (item) {
    let nextItems = this.state.items.concat([item]);
    this.setState({
      items: nextItems
    }, () => {
      this.onFilterChange(this.state.currFilter)
    })
  }
  onRemove (indx) {
    let nextItems = this.state.items.filter((item, i) => i !== indx)
    this.setState({
      items: nextItems
    }, () => {
      this.onFilterChange(this.state.currFilter)
    })
  }
  updateItemsToRender () {
    this.onFilterChange(this.state.currFilter)
  }
  onFilterChange (filterName) {
    switch (filterName) {
      case 'All':
        this.setState({
          itemsToRender: Object.assign([],this.state.items),
          currFilter: 'All'
        })
        break;
      case 'Active':
        this.setState({
          itemsToRender: this.state.items.filter(item => !item.isDone),
          currFilter: 'Active'
        })
        break;
      case 'Done':
        this.setState({
          itemsToRender: this.state.items.filter(item => item.isDone),
          currFilter: 'Done'
        })
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div>
        <TodoInput onSubmit={this.onSubmit}></TodoInput>
        <TodoFilter currFilter={this.state.currFilter} onFilterChange={this.onFilterChange}></TodoFilter>
        <TodoList items={this.state.itemsToRender} onRemove={this.onRemove} updateItemsToRender={this.updateItemsToRender}></TodoList>
      </div>
    );
  }
}

export default App;
