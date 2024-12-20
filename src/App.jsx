import {Routes, Route, Navigate} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import AwaitingStatusPage from './pages/AwaitingStatusPage'
import RequestInformationPage from './pages/RequestInformationPage'
import ReviewPage from './pages/ReviewPage'
import ConfirmationPage from './pages/ConfirmationPage'
import TermsAndAttachmentPage from './pages/TermsAndAttachmentPage'


function App() {

  return (
    <>
    <div className='flex bg-white min-h-screen'>
      <div className='fixed'>
        <Sidebar/>

      </div>
      <div className='flex-1 ml-80'>
        <Navbar/>
        <main className='p-6'>
          <Routes>
            <Route path='/' element={<AwaitingStatusPage/>}/>
            <Route path='/request-information' element={<RequestInformationPage/>}/>
            <Route path='/request-terms' element={<TermsAndAttachmentPage/>}/>
            <Route path='/request-review' element={<ReviewPage/>}/>
            <Route path='/request-confirmation' element={<ConfirmationPage/>}/>
          </Routes>
        </main>
      </div>
    </div>
    <Toaster/>  
    </>
  )
}

export default App
