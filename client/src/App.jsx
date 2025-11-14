import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'
import Preview from './pages/Preview'
import Login from './pages/Login'

const App = () => {
  return (
    <Routes>

      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard layout */}
      <Route path="app" element={<Layout />}>

        {/* Index route */}
        <Route index element={<Dashboard />} />

        {/* Nested routes */}
        <Route path="builder/:resumeId" element={<ResumeBuilder />} />
        <Route path="view/:resumeId" element={<Preview />} />

      </Route>
    </Routes>
  )
}

export default App
