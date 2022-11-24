import { RiTodoFill, RiDeleteBin6Line, RiCheckboxLine } from 'react-icons/ri'
import styles from './Todo.module.css'

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isComplited ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin6Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <RiCheckboxLine
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  )
}

export default Todo
