import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }
    
    render() {
        // Pull out id and title from props for ease of reference
        // Ex. id = this.props.todo.id
        const { id, title } = this.props.todo
        return (
//            <div style={{ backgroundColor: '#f4f4f4' }}>
            // On change run method markComplete associated with the prop
            // passed to this component. ie this.props.markComplete drills up
            // to from whence the props come; in this case App where the state is defined
            <div style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox"
                        onChange={this.props.markComplete.bind(this, id)}
                    />
                    {' '}
                    { title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem