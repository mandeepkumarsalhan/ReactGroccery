//rafce

import Home from "./pages/Home/Home"
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
/**
 *
 * @App
 * We import Home component here, so now no need to import all the components in App file
 */
const App = () => {
  const router = createBrowserRouter([{
    path: '/',
    element: <Home />
  }])
  return <RouterProvider router={router} />
}

export default App
