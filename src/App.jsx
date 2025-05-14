import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import AboutUsPage from './pages/AboutUs'
import FoodPage from './pages/FoodPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/food" element={<MainLayout><FoodPage /></MainLayout>} />
      <Route path="/about" element={<MainLayout><AboutUsPage /></MainLayout>} />
    </Routes>
  )
}

export default App
