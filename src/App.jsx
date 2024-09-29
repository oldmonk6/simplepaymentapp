import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Signup} from './components/signup'; // Ensure you have these components
import { Signin } from './components/signin';
import { Dashboard } from './components/dashboard';
import { Sendmoney } from './components/sendmoney';


function App() {

  return (
    <div className=''>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/sendmoney" element={<Sendmoney/>} />
      </Routes></BrowserRouter>
     
    </div>
  )
}

export default App
