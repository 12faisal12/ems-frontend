import React from 'react'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <HeaderComponent></HeaderComponent>
    <Routes>
      <Route path = "/" element = {<ListEmployeeComponent/>}></Route>
      <Route path = "/employees" element = {<ListEmployeeComponent/>}></Route>
      <Route path = "/add-employee" element = {<CreateEmployeeComponent></CreateEmployeeComponent>}></Route>
      <Route path = "/edit-employee/:id" element = {<CreateEmployeeComponent></CreateEmployeeComponent>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
 
export default App