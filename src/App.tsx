import {router} from './router.tsx'
import { RouterProvider } from "react-router-dom"
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
