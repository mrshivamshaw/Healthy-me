import './App.css'
import { Route, Routes } from "react-router-dom"; 
import About from './components/About/About';
import Home from './components/Home/Home';
import HowToUse from './components/HowToUse/HowToUse';
import Login from './components/LogInSite/Login';
import SignIn from './components/SignIn/SignIn';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './contextApi/ContextApi';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/Chatbot/MainPage';
import ChallangesOverview from './components/Challenges/ChallangesOverview';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RewardsPage from './components/Challenges/Rewards/RewardsPage';

function App() {
  return (
    <AuthProvider>
      <div className='bg-[#F3F3FD]'>
        <Navbar />
        <Routes>
            <Route index path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='howtouse' element={<HowToUse/>}/>
            <Route path ='login' element={<Login/>}/>
            <Route path ='signin' element={<SignIn/>}/>
            <Route path='chatbot' element={<PrivateRoute ><MainPage/></PrivateRoute>} />
            <Route path='mychallenges' element={<PrivateRoute ><ChallangesOverview /></PrivateRoute>} />
            <Route path ='rewards' element={<RewardsPage/>}/>
        </Routes>
        <ToastContainer/>
        </div>
    </AuthProvider>
  )
}

export default App
