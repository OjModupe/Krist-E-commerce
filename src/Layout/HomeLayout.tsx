
import { Outlet } from 'react-router-dom'
import NavBar from '../Shared/NavBar'
import Footer from '../Shared/Footer'

const HomeLayout = () => {
  return (
    <div className="">
    <NavBar/>
    <Outlet/>
    <Footer/>
        {/* footer */}
      
    </div>
  )
}

export default HomeLayout
