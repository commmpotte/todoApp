import { RiDeleteBin5Line, RiRefreshFill } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodoActions.module.css'

function TodoActions({
  resetTodos,
  deleteComplitedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={resetTodos} title="Reset ToDos">
        <RiRefreshFill />
      </Button>
      <Button
        onClick={deleteComplitedTodos}
        title="Delete All"
        disabled={!completedTodosExist}

      >
        <RiDeleteBin5Line />
      </Button>
    </div>
  )
}
export default TodoActions
