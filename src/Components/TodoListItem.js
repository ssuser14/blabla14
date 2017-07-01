import React, {Component} from 'react';

class TodoListItem extends Component {
    onChangeStatus (e) {
        this.setState({
            value: e.target.checked
        })
        this.props.children.isDone = e.target.checked
    }
    handleRemove () {
        this.props.onRemove(this.props.value)
    }
    render () {
        var _style = this.props.children.isDone ? "line-through" : 'none'
        return(
            <li>
                <span style={{"textDecoration": _style}}>{this.props.children.name}</span>
                <input type="checkbox" onChange={this.onChangeStatus.bind(this)} defaultChecked={this.props.children.isDone}/>
                <span onClick={this.handleRemove.bind(this)}>X</span>
            </li>
        )
    }
}

export default TodoListItem
