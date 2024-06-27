import React from 'react'
import Home from './home/Home'
import Courses from './Courses/Courses'
import {Route , Routes} from "react-router-dom"

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={ <Courses /> } />
          
        </Routes>
        {/* <Toaster /> */}
      </div>
    </>
  )
}

export default App
