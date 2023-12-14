import './App.css'
import { Route, Routes } from "react-router-dom"; 
import About from './components/About/About';
import Home from './components/Home/Home';
import HowToUse from './components/HowToUse/HowToUse';
import Login from './components/LogInSite/Login';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
      <div className='bg-[#F3F3FD]'>
        <Routes>
          <Route path='/' >
            <Route path='' element = {<Home />} />
            <Route path='home' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='howtouse' element={<HowToUse/>}/>
            <Route path ='login' element={<Login/>}/>
            <Route path ='signin' element={<SignIn/>}/>
        </Route>
        </Routes>
        </div>
  )
}

export default App
