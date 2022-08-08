import { PureComponent } from 'react';

class TodoItem extends PureComponent {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <button type="button" onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          Delete
        </button>
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;