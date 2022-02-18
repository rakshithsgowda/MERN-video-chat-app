import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import LoginPage from './authPages/LoginPage'
import RegisterPage from './authPages/RegisterPage'
import Dashboard from './DashBoard/Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<Navigate to='/dashboard' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
