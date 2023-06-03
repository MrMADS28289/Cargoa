import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Chat from './Components/Chat/Chat';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/NotFound/NotFound';
import Registration from './Components/Registration/Registration';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Registration />} />
      <Route path='chat/:id' element={<Chat />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
