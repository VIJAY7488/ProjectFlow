import { Route, Routes } from 'react-router-dom'
import LandingPage from './page/LandingPage'
import SignupForm from './page/SignupForm'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
  )
}

export default App
