
import './App.css'
import Home from './compoent/Home/Home'
import Room from './compoent/RoomType/Room'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Room/>  ,
    },
    {
      path:"/room",
      element : <h1>Room</h1>
    }
  ]);

  return (
    <>
   
    <RouterProvider router={router} />
  
    </>
  )
}

export default App
