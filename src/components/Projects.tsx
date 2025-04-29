import { TbFolderX } from 'react-icons/tb'
import CarouselContainer from './CarouselContainer'
import { useState } from 'react'

const ProjectSection = () => {
  const data = [{}]
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

          <button className="btn btn-sm btn-accent px-6">View</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mx-auto mt-10">
        {[...Array(6).keys()].map((_, i) => {
          const hoverClass = [
            'hover:-translate-x-2 hover:-translate-y-2', // 0 - top-left
            'hover:-translate-y-2', // 1 - top
            'hover:translate-x-2 hover:-translate-y-2', // 2 - top-right
            'hover:-translate-x-2 hover:translate-y-2', // 3 - bottom-left
            'hover:translate-y-2', // 4 - bottom
            'hover:translate-x-2 hover:translate-y-2', // 5 - bottom-right
          ][i]

          return (
            <div
              className={`w-80 h-64 shrink-0 card bg-sky-900 cursor-pointer transition-all duration-200 transform ${hoverClass} active:scale-95`}
              key={i}
            >
              <img
                src="/logo.png"
                alt=""
                className="w-32 h-auto mx-auto mt-10"
              />
            </div>
          )
        })}
      </div>

      <div className="mt-10">
        {data.length > 0 ? (
          <CarouselContainer data={data} />
        ) : (
          <div className="p-10 h-64 card gap-3 justify-center items-center text-center bg-gray-700 mt-20 mx-auto">
            <TbFolderX className="text-4xl" />
            <h2 className="text-2xl">No Project</h2>
            <p className="text-sm w-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis quasi temporibus, soluta distinctio suscipit explicabo.
            </p>
          </div>
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
