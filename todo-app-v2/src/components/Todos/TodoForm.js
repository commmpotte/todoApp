import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault() //Остаемся на той же странице
    addTodo(text) // Добавляем в список вводимый текст
    setText('') //setText позволяет изменять состояние TodoForm (обнуляем значение в поле ввода)
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="submit">Submit</Button>
      </form>
    </div>
  )
}
export default TodoForm
