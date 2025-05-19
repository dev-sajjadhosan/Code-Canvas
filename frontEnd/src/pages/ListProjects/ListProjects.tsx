import { MdOutlineViewInAr } from 'react-icons/md'
import { TbFileCode, TbFileZip, TbFilterCode } from 'react-icons/tb'
import image from '../../assets/image.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ViewModal from './ViewModal'
import EmptyContainer from '../../components/Empty'

const ListProject = () => {
  const [view, setView] = useState(false)
  const data = [...Array(0).keys()]
  return (
    <>
      <ViewModal isOpen={view} setIsOpen={setView} />
      {/* ---------------- */}
      <div className="card p-3">
        <div className="flex justify-between items-center">
          <h3 className="text-xl">List Projects</h3>
          <label className="input input-sm rounded-2xl ">
            <TbFileCode className="text-lg opacity-70" />
            <input
              type="text"
              className="grow pt-1"
              placeholder="project.name"
            />
          </label>
          <div className="flex items-center gap-1">
            <button className="btn btn-sm btn-ghost tooltip" data-tip="Import">
              <TbFileZip className="text-lg" />
            </button>
            <button className="btn btn-sm btn-ghost tooltip" data-tip="Filter">
              <TbFilterCode className="text-lg" />
            </button>
            <button
              className="btn btn-sm btn-ghost tooltip"
              data-tip="Project View"
              onClick={() => setView(!view)}
            >
              <MdOutlineViewInAr className="text-lg" />
            </button>
          </div>
        </div>
        <div className="mt-3">
          {data.length > 0 ? (
            <div className="grid grid-cols-3 gap-5 overflow-y-scroll h-[27rem] p-2">
              {data.map((_, i) => (
                <Link
                  to={`/detail-page/${i}`}
                  className="card p-2 relative cursor-pointer transition duration-150 active:scale-95"
                  key={i}
                >
                  <img
                    src={image}
                    alt=""
                    className="object-contain rounded-xl"
                  />
                  <h3 className="text-lg ml-2 mt-2 absolute left-4 top-3">
                    #-0{i}
                  </h3>
                </Link>
              ))}
            </div>
          ) : (
            <EmptyContainer
              title="No Projects Found"
              des={`It seems you don't have any projects yet. Start creating one!`}
            />
          )}
        </div>
      </div>
    </>
  )
}
export default ListProject
