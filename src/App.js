import React from 'react'
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import ToggleForm from './components/ToggleForm';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ToggleForm />
      <TodoList />
    </div>
  )
}
 
export default App
