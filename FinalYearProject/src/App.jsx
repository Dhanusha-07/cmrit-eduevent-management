/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import RegisterPage from './pages/RegisterPage'
import Layout from './Layout'
import LoginPage from './pages/LoginPage'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import UserAccountPage from './pages/UserAccountPage'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import AddEvent from './pages/AddEvent'
import EventPage from './pages/EventPage'
import CalendarView from './pages/CalendarView'
import OrderSummary from './pages/OrderSummary'
import PaymentSummary from './pages/PaymentSummary'
import TicketPage from './pages/TicketPage'
import CreatEvent from './pages/CreateEvent'
import Admin from './pages/AdminPage'
import UserPage from './pages/UserPage'
import HomePage from './pages/HomePage'
import Studymaterials from './Pages/Studymaterials'
import Semestermaterials from './Pages/Semestermaterials'
import Higherstudies from './Pages/Higherstudies'
import Interview from './Pages/Interview'
import Semester1and2 from './Pages/semester1and2'
import Semester3 from './Pages/Semester3'
import Semester4 from './Pages/Semester4'
import Semester5 from './Pages/Semester5'
import Semester6 from './Pages/Semester6'
import Semester7 from './Pages/Semester7'
import Semester8 from './Pages/Semester8'
import ReviewPage from './pages/ReviewPage'
import VideoReview from './pages/VideoReview'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import Placement from './pages/Placement'
import Header from "./components/Header/Header"
import Body from "./components/Body/Body"


axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.withCredentials=true;

function App() {
  return (
    <UserContextProvider> 
    <Routes>

      <Route path='/' element={<RegisterPage/>}/>
      <Route path='/admin' element={< Admin/>}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/forgotpassword' element = {<ForgotPassword/>} />
      <Route path='/resetpassword' element = {<ResetPassword/>} />
      <Route path='/HomePage' element={<HomePage />}/> 
      <Route path="/studymaterials" element={<Studymaterials />} />           
      <Route path='createEvent' element={<AddEvent />}/>
      <Route path='/event/:id' element= {<EventPage/>} />
      <Route path='/event/:id/ordersummary' element = {<OrderSummary />} />
      <Route path='/event/:id/ordersummary/paymentsummary' element = {<PaymentSummary />} />
      <Route path='/calendar' element={<CalendarView />} />
      <Route path='/wallet' element={<TicketPage />}/>
      <Route path='/admin/dashboard' element={<Layout />}>
        <Route index element = {<IndexPage />} /> 
        <Route path='useraccount' element = {<UserAccountPage />}/>
        <Route path='createEvent' element = {<AddEvent/>} />
        <Route path='event/:id' element= {<EventPage/>} />
        <Route path='calendar' element={<CalendarView />} />
        <Route path='wallet' element={<TicketPage />}/>
        <Route path='event/:id/ordersummary' element = {<OrderSummary />} /> 
      </Route>      
      <Route path='/events' element={<Layout />}>
        <Route index element = {<IndexPage />} />
        <Route path='event/:id' element= {<EventPage/>} />
        <Route path='event/:id/ordersummary' element = {<OrderSummary />} />
  </Route>  
  <Route>
     <Route path="/studymaterials" element={<Studymaterials />} />
        <Route path="/semestermaterials" element={<Semestermaterials />} />
        <Route path="/higherstudy" element={<Higherstudies/>} />
        <Route path="/interview" element={<Interview/>} />
        <Route path="/semester1" element={<Semester1and2/>} />
        <Route path="/semester3" element={<Semester3/>} />
        <Route path="/semester4" element={<Semester4/>} />
        <Route path="/semester5" element={<Semester5/>} />
        <Route path="/semester6" element={<Semester6/>} />
        <Route path="/semester7" element={<Semester7/>} />
        <Route path="/semester8" element={<Semester8/>} /> 
        <Route path="/reviews" element={<ReviewPage/>}/>
        <Route path="/placements" element={<Placement/>}/>
        <Route path="/videos" element={<VideoReview/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contactus" element={<Contactus/>}/>

        <Route path="/header" element={<Header/>}/>
        <Route path="/body" element={<Body/>}/>

  </Route>  
    </Routes>
    </UserContextProvider>  
    
  )
}

export default App
