import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import SalesOrderPage from './pages/salesorder/SalesOrderPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
        
        <Route path='/sales-order' element={<SalesOrderPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
 