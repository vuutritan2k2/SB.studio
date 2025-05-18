import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import AboutUsPage from './pages/AboutUs'
import FoodPage from './pages/FoodPage'
import LoginPage from './pages/Login'
import { useEffect, useState } from 'react'
import LibraryPage from './pages/LibraryPage'
import useZustand from './zustand/useZustand'

function App() {
  const nagative = useNavigate()
  const fetchUserInfo = useZustand((state) => state.fetchUserInfo);
  const unauthorized = useZustand((state) => state.unauthorized);

  useEffect(() => {
     fetchUserInfo();
  }, [fetchUserInfo])

  useEffect(() => {
    if (unauthorized) {
      nagative('/login')
    }
  }, [unauthorized])

  return (
    <Routes>
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/food" element={<MainLayout><FoodPage /></MainLayout>} />
      <Route path="/library" element={<MainLayout><LibraryPage /></MainLayout>} />
    </Routes>
  )
}

export default App
