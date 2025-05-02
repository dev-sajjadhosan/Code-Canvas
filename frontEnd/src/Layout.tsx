import { Outlet } from 'react-router-dom'
import SideNav from './components/SideNav'
import Home from './pages/Home/Home'

function Layout() {
  return (
    <div className="flex flex-col relative w-11/12 mx-auto">
      {/* <Outlet /> */}
      <Home />
      <SideNav />
    </div>
  )
}

export default Layout
