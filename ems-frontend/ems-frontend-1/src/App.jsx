
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Employee from './components/Employee.jsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
         <Routes>
          <Route path='/' element={ <ListEmployeeComponent />} ></Route>
          <Route path = '/employee' element = {<ListEmployeeComponent />}></Route>
          <Route path='/add-employee' element={<Employee />}></Route>
          <Route path='/update-employee/:id' element={<Employee/>}></Route>
          
         </Routes>
         {/*  <ListEmployeeComponent /> */}
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
