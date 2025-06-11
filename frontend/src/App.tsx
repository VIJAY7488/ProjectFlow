import { Route, Routes } from 'react-router-dom'
import LandingPage from './page/LandingPage'
import SignupForm from './page/SignupForm'
import SigninForm from './page/SigninForm'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
      </Routes>
    </div>
  )
}

export default App
