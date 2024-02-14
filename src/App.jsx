import React from 'react'
import AddForm from './components/AddForm'
import ListTodos from './components/ListTodos'
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
  <div className='vh-100 bg-dark text-white '>
    <div className='container p-5'>
    <h2 className='text-center'>
    <span className="text-danger">REDUX</span><span className="text-warning">NOTES</span>
    </h2>
    <AddForm/>
    <ListTodos/>
    </div>
  </div>
  )
}

export default App