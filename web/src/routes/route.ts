import { createBrowserRouter } from "react-router"
import Home from "../pages/home/home"
import HowItWorks from "../pages/howitworks"
import Merchandise from "../pages/merchs"
import Donate from "../pages/donate"
const route = createBrowserRouter([
  { path: "/", 
    Component: Home  },
  {
    path: "/howitworks",
    Component: HowItWorks,
  },
  {
    path: "/merchs",
    Component: Merchandise,
  },
  {
    path: "/donate",
    Component: Donate,
  },
])
export default route