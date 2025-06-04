import { Route, Routes } from "react-router-dom"
import AppLayout from "./components/layout/appLayout"
import Projects from "./pages/Projects"
import Home from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="works" element={<Projects />} />
      </Route>
    </Routes>
  )
}

export default App
