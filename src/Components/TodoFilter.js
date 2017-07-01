import React, {Component} from 'react'

class TodoFilter extends Component {
    constructor () {
        super()
        this.state = {
            currFilter: 'All'
        }
    }
    componentWillReceiveProps (nextProps) {
        this.setState({
            currFilter: nextProps.currFilter
        })
    }
    handleFilterChange (e) {
        this.props.onFilterChange(e.target.value)
    }
    render () {
        return (
            <div>
                <ul style={{"display": "flex", "listStyle": "none", "margin": 0, "padding": 0}}>
                    <li>
                        <input type="checkbox" 
                        value="All" 
                        onChange={this.handleFilterChange.bind(this)} 
                        checked={this.state.currFilter === 'All'}/> 
                        All
                    </li>
                    <li>
                        <input type="checkbox" 
                        value="Active" 
                        onChange={this.handleFilterChange.bind(this)} 
                        checked={this.state.currFilter === 'Active'}/> 
                        Active
                    </li>
                    <li>
                        <input type="checkbox" 
                        value="Done" 
                        onChange={this.handleFilterChange.bind(this)} 
                        checked={this.state.currFilter === 'Done'}/> 
                        Done
                    </li>
                </ul>
            </div>
        )
    }
}

export default TodoFilter