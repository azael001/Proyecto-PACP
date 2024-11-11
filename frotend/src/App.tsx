import Login from './pages/Login'
import Home from './pages/Home'
import Reports from './pages/Reports'
import ErrorPage from './pages/ErrorPage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MenuAll from './components/MenuAll'
const router = createBrowserRouter([
  {
    path: '/',
    errorElement:<ErrorPage/>,
    children: [
     {
        index: true,
        element: <Login/>
      },
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'reports',
        element: <Reports/>
      },
      {
        path: 'menu',
        element: <MenuAll/>
      } 
     ]
  },
 ]);
function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
