import React from 'react'
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Toggle from './components/Toggle';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Toggle />
      <TodoList />
    </div>
  )
}
 
export default App
