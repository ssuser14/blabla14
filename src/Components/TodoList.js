import React, {Component} from 'react';
import TodoListItem from './TodoListItem'

class TodoList extends Component {
    constructor () {
        super()

        this.onRemove = this.onRemove.bind(this)
        this.onItemStatusChanged = this.onItemStatusChanged.bind(this)
    }
    onRemove (e) {
        this.props.onRemove(e)
    }
    onItemStatusChanged () {
        this.props.updateItemsToRender()
    }
    createItems (items) {
        return items.map((item, indx) => <TodoListItem key={indx} value={indx} onRemove={this.onRemove} onItemStatusChanged={this.onItemStatusChanged}>{item}</TodoListItem>)
    }

    render () {
        return (
            <ul>
                {this.createItems(this.props.items)}
            </ul>
        )
    }
}

export default TodoList
