import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
