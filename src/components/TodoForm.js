import React, { Component } from 'react'

const initialState = {
    title: "",
    content: ""
}

export default class TodoForm extends Component {

    state = initialState

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state)
        this.setState(initialState)
    }

    

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <h2>New Todo Form</h2>
                <label>Title</label>
                <input 
                    type="text" 
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange} 
                />
                <label>Content</label>
                <input 
                    type="text" 
                    name="content"
                    value={this.state.content}
                    onChange={this.handleChange} 
                />
                <input type="submit" value="Create Todo" />
            </form>
        )
    }
}
