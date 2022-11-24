import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodoActions from './components/Todos/TodoActions'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isComplited: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isComplited: !todo.isComplited }
          : { ...todo }
      })
    )
  }

  const resetTodoHandler = () => {
    setTodos([])
  }
  const deleteComplitedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isComplited))
  }
  const completedTodoCount = todos.filter((todo) => todo.isComplited).length

  return (
    <div className="App">
      <h1> Todo App </h1> <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodoActions
          completedTodosExist={!!completedTodoCount}
          resetTodos={resetTodoHandler}
          deleteComplitedTodos={deleteComplitedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodoCount > 0 && (
        <h2>{`You have completed ${completedTodoCount} ${
          completedTodoCount > 1 ? 'todos' : 'todo'
        }  `}</h2>
      )}
    </div>
  )
}

export default App
