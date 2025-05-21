import CarouselContainer from './CarouselContainer'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useData from '../hooks/useData'
import EmptyContainer from './Empty'

const ProjectSection = () => {
  const data = useData()
  const [t, setT] = useState(1)

  return (
    <>
      <div className="flex justify-between items-center ">
        <h3 className="text-2xl">Projects</h3>
        <div className="flex items-center gap-8">
          {/* name of each tab group should be unique */}
          <div role="tablist" className="tabs tabs-box tabs-sm gap-5 px-4">
            <a
              role="tab"
              className={`tab duration-200 ${t === 1 && 'tab-active'}`}
              onClick={() => setT(1)}
            >
              Beginner
            </a>
            <a
              role="tab"
              className={`tab duration-200 ${t === 2 && 'tab-active'}`}
              onClick={() => setT(2)}
            >
              Intermediate
            </a>
            <a
              role="tab"
              className={`tab duration-200 ${t === 3 && 'tab-active'}`}
              onClick={() => setT(3)}
            >
              Professional
            </a>
          </div>

          <button className="btn btn-sm btn-accent px-6" disabled>
            View
          </button>
        </div>
      </div>

      <div className="mt-10 w-fit mx-auto">
        {data.length > 0 ? (
          <div className="grid grid-cols-3 gap-3 mt-10">
            {data.slice(0, 6).map(
              (
                {
                  name,
                  // type,
                  // status,
                  image,
                },
                i,
              ) => {
                const hoverClass = [
                  'hover:-translate-x-2 hover:-translate-y-2', // 0 - top-left
                  'hover:-translate-y-2', // 1 - top
                  'hover:translate-x-2 hover:-translate-y-2', // 2 - top-right
                  'hover:-translate-x-2 hover:translate-y-2', // 3 - bottom-left
                  'hover:translate-y-2', // 4 - bottom
                  'hover:translate-x-2 hover:translate-y-2', // 5 - bottom-right
                ][i]

                return (
                  <Link to={`detail-page/${name}`} key={i}>
                    <div
                      className={`w-80 h-64 shrink-0 card bg-gray-800 cursor-pointer transition-all duration-200 transform ${hoverClass} active:scale-95 overflow-hidden`}
                    >
                      <img src={image} alt="" className="w-fit h-full" />
                      <h2 className="text-xl tracking-wide absolute bottom-5 left-7">
                        {name}
                      </h2>
                    </div>
                  </Link>
                )
              },
            )}
          </div>
        ) : (
          <EmptyContainer
            title="No Project Found"
            des={`It seems you don't have any projects yet. Start creating one!`}
          />
        )}
      </div>

      <div className="my-20">
        {data.length > 0 ? (
          <CarouselContainer data={data} />
        ) : (
          <EmptyContainer
            title="No Project Found"
            des={`It seems you don't have any projects yet. Start creating one!`}
          />
        )}
      </div>

      {/* <div className="w-full overflow-x-auto scroll-smooth whitespace-nowrap py-4 px-2 space-x-4 flex snap-x snap-mandatory">
        <div className="inline-block snap-start shrink-0 w-64 h-40 bg-blue-500 rounded-xl text-white text-center leading-[10rem] text-xl font-bold">
          Slide 1
        </div>
        <div className="inline-block snap-start shrink-0 w-64 h-40 bg-purple-500 rounded-xl text-white text-center leading-[10rem] text-xl font-bold">
          Slide 2
        </div>
        <div className="inline-block snap-start shrink-0 w-64 h-40 bg-green-500 rounded-xl text-white text-center leading-[10rem] text-xl font-bold">
          Slide 3
        </div>
        <div className="inline-block snap-start shrink-0 w-64 h-40 bg-pink-500 rounded-xl text-white text-center leading-[10rem] text-xl font-bold">
          Slide 4
        </div>
        <div className="inline-block snap-start shrink-0 w-64 h-40 bg-pink-500 rounded-xl text-white text-center leading-[10rem] text-xl font-bold">
          Slide 4
        </div>
        <div className="inline-block snap-start shrink-0 w-64 h-40 bg-pink-500 rounded-xl text-white text-center leading-[10rem] text-xl font-bold">
          Slide 4
        </div>
        <div className="inline-block snap-start shrink-0 w-64 h-40 bg-pink-500 rounded-xl text-white text-center leading-[10rem] text-xl font-bold">
          Slide 4
        </div>
        <div className="inline-block snap-start shrink-0 w-64 h-40 bg-pink-500 rounded-xl text-white text-center leading-[10rem] text-xl font-bold">
          Slide 4
        </div>
      </div> */}
    </>
  )
}
export default ProjectSection
