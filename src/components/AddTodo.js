import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    // Define input text fields in the state variable
    state = {
        title: ''
    }

    // onChange handler to set state title to whatever value user types in
    // changing input with name="title" will change state.title
    onChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    onSubmit = (e) => {
        e.preventDefault();  // ??? prevents form from submitting to file?
        this.props.addTodo(this.state.title);  // Pass the title up to App
        this.setState({ title: '' });  // Reset title for the input after submitting
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                    <input
                        type="text"
                        name="title"
                        style={{ flex: '10', padding: '5px' }}
                        placeholder="Add Todo ..."
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={{ flex: '1' }}
                    />
                </form>
            </div>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
