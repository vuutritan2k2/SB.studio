import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import AboutUsPage from './pages/AboutUs'
import FoodPage from './pages/FoodPage'
import LoginPage from './pages/Login'
import { useEffect, useState } from 'react'
import LibraryPage from './pages/LibraryPage'

function App() {
  // Check thông tin user
  // const [isUser, setIsUser] = useState(false)
  // const nagative = useNavigate()

  // useEffect(() => {
  //   if (!isUser) {
  //     nagative('/login')
  //   }
  // },[])

  return (
    <Routes>
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/food" element={<MainLayout><FoodPage /></MainLayout>} />
      <Route path="/library" element={<MainLayout><LibraryPage /></MainLayout>} />
    </Routes>
  )
}

export default App
