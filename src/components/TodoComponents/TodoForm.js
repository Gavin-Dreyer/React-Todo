import React from 'react'



class TodoForm extends React.Component {
    constructor() {
        super ()
        this.state = {
            task: '',
            search: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.task)
        this.setState({
            task: ''
        })
    }

    submitSearch = e => {
        e.preventDefault()
        this.props.taskFilter(this.state.search)
        this.setState({
            search: ''
        })
    }


    render () {
        return (
            <>
                <form onSubmit={this.submitTask}>
                    <input 
                    type='text'
                    name='task'
                    value={this.state.task}
                    onChange={this.handleChange}/>
                    <button >Add</button>
                </form>
                <form onSubmit={this.submitSearch}>
                    <input 
                    type='text'
                    name='search'
                    value={this.state.search}
                    onChange={this.handleChange}
                    />
                    <button>Search</button>
                </form>
            </>
        )
    }
}

export default TodoForm