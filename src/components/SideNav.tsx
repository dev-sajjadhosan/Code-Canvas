import { AiOutlineUserSwitch } from 'react-icons/ai'
import { HiLightBulb } from 'react-icons/hi'
import { HiMiniArrowSmallLeft, HiMiniCodeBracket } from 'react-icons/hi2'
import { LuLayers } from 'react-icons/lu'
import { useLocation, useNavigate } from 'react-router-dom'

const SideNav = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <>
      <div className=" flex-col justify-between items-center p-5 w-14 card fixed left-5 top-1/2 -translate-y-1/2 bg-base-200">
        <ul className="menu menu-horizontal gap-4">
          {/* <li className="tooltip tooltip-right" data-tip="Projects">
            <a href="">
              <HiMiniCodeBracket className="text-lg" />
            </a>
          </li> */}
          <button
            className="btn btn-sm btn-link tooltip tooltip-right"
            data-tip="Back"
            disabled={pathname === '/' ? true : false}
            onClick={() => {
              if (pathname !== '/') {
                navigate(-1)
              }
            }}
          >
            <HiMiniArrowSmallLeft className="text-lg" />
          </button>

          <li className="tooltip tooltip-right" data-tip="Portfolio">
            <a href="">
              <AiOutlineUserSwitch className="text-lg" />
            </a>
          </li>
          <li className="tooltip tooltip-right" data-tip="Projects">
            <a href="">
              <LuLayers className="text-lg" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideNav
