import React, {Component} from 'react';

class TodoListItem extends Component {
    constructor () {
        super()

        this.onChangeStatus = this.onChangeStatus.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }
    onChangeStatus (e) {
        this.setState({
            value: e.target.checked
        }, () => {
            this.props.onItemStatusChanged()
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
                <input type="checkbox" onChange={this.onChangeStatus} checked={this.props.children.isDone}/>
                <span onClick={this.handleRemove}>X</span>
            </li>
        )
    }
}

export default TodoListItem
