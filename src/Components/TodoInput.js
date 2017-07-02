import React, { Component } from 'react';

class TodoInput extends Component {
    constructor () {
        super()
        
        this.state = {
            item: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onSubmit (e) {
        e.preventDefault()
        this.props.onSubmit({name: this.state.item, isDone: false})
        this.setState({item: ''})
        this.refs.item.value = ''
    }
    onChange (e) {
        this.setState({
            item: e.target.value
        })
    }
    render () {
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" ref="item" placeholder="Enter todo" onChange={this.onChange}/>
                <button type="submit" onClick={this.onSubmit}>Submit</button>
            </form>
        )
    }
}

export default TodoInput
