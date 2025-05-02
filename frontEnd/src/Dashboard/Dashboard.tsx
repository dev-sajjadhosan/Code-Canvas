import { AiOutlineDeploymentUnit } from 'react-icons/ai'
import { FaPersonWalkingArrowRight } from 'react-icons/fa6'
import { GoRelFilePath } from 'react-icons/go'
import {
  TbActivityHeartbeat,
  TbDeviceUnknownFilled,
  TbListDetails,
  TbPencilCode,
  TbSettingsCode,
} from 'react-icons/tb'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Dashboard = () => {
  const { pathname } = useLocation()
  return (
    <div className="flex items-center justify-center h-screen relative">
      <div className="card w-6xl p-5 bg-base-300 text-base-content text-center">
        <div className="mb-7 min-h-[30rem]">
          {pathname === '/dashboard' ? (
            <div className="card gap-1 top-1/2 left-1/2 -translate-1/2 absolute ">
              <h2 className="text-2xl font-semibold">
                Welcome to Dashboard dev.
              </h2>
              <p className="text-sm font-semibold w-lg mx-auto">
                Please create a user friendly ui that can help you to improve
                your ui knowledge and update && upgrade your Self!
              </p>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
        <footer className="flex justify-center items-center gap-1">
          <Link
            to={'add-project'}
            className="btn btn-sm btn-ghost px-4 font-light tooltip"
            data-tip="Add Project"
          >
            <TbPencilCode className="text-lg" />
          </Link>
          <Link
            to={'list-project'}
            className="btn btn-sm btn-ghost px-4 font-light tooltip"
            data-tip="List Projects"
          >
            <TbListDetails className="text-lg" />
          </Link>
          <Link
            to={'project-activity'}
            className="btn btn-sm btn-ghost px-4 font-light tooltip"
            data-tip="Project Activity"
          >
            <TbActivityHeartbeat className="text-lg" />
          </Link>
          <Link
            to={'deploy-project'}
            className="btn btn-sm btn-ghost px-4 font-light tooltip"
            data-tip="Deploy Projects"
          >
            <AiOutlineDeploymentUnit className="text-lg" />
          </Link>
          <Link
            to={'setting'}
            className="btn btn-sm btn-ghost px-4 font-light tooltip"
            data-tip="Setting"
          >
            <TbSettingsCode className="text-lg" />
          </Link>
          <Link
            to={'logout'}
            className="btn btn-sm btn-ghost px-4 font-light tooltip"
            data-tip="Logout"
          >
            <FaPersonWalkingArrowRight className="text-lg" />
          </Link>
          <Link
            to={'/dashboard'}
            className="btn btn-sm btn-ghost px-4 font-light tooltip ml-auto"
            data-tip="Default"
          >
            <GoRelFilePath className="text-lg" />
          </Link>
        </footer>
      </div>
    </div>
  )
}

export default Dashboard
