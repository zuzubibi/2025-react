import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Editor from './components/Editor'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Editor></Editor>
      <List></List>
    </div>
  )
}

export default App
