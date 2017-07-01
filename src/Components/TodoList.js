import React, {Component} from 'react';
import TodoListItem from './TodoListItem'

class TodoList extends Component {
    onRemove (e) {
        this.props.onRemove(e)
    }
    createItems (items) {
        return items.map((item, indx) => <TodoListItem key={indx} value={indx} onRemove={this.onRemove.bind(this)}>{item}</TodoListItem>)
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
