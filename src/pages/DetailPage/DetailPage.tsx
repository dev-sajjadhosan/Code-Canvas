import { useState } from 'react'
import { IoMdArrowDropleft } from 'react-icons/io'
import { LuImageDown, LuImageUpscale } from 'react-icons/lu'
import CarouselContainer from '../../components/CarouselContainer'

const DetailPage = () => {
  const [pV, setPV] = useState(false)
  return (
    <div className="p-10 relative">
      {/* image view */}

      <div
        className={`transition-all duration-250 fixed ${
          pV ? 'top-1/2 opacity-100' : '-top-1/2 opacity-0'
        }  left-1/2 -translate-1/2 w-4xl h-[30rem] bg-black/40 backdrop-blur-sm z-20 flex flex-col justify-center items-center`}
      >
        <img
          src="https://s3-alpha.figma.com/hub/file/3848251683/051f60df-fc0f-408c-80fe-744e346dce2f-cover.png"
          alt=""
          className="card"
          width={600}
        />
        <button
          className="btn btn-ghost mt-5 px-8"
          onClick={() => setPV(false)}
        >
          <LuImageDown className="text-2xl" />
        </button>
      </div>

      <div className="w-11/12  mx-auto p-10">
        <h2 className="text-2xl text-right mb-3"># Project 01</h2>
        <div className="flex justify-between gap-3 w-full">
          <div className="relative">
            <img src="/logo.png" alt="" width={400} className="" />
            <button
              className="btn btn-sm btn-ghost absolute bottom-5 right-5"
              onClick={() => setPV(true)}
            >
              <LuImageUpscale className="text-lg" />
            </button>
          </div>
          <div className="p-4 w-xl space-y-2">
            <h1 className="text-2xl ">
              Calculator <span className="badge badge-xs">basic</span>
            </h1>
            <p className="text-sm tracking-wide first-letter:text-3xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              odio, illo, numquam alias ullam magni porro saepe accusamus sequi
              nulla sit repellat nisi, eius iure impedit ratione beatae dolorum
              maxime veniam eligendi inventore officia consequuntur amet?
              Impedit rem nemo incidunt.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5 mt-5">
          <div className="w-xl">
            <h2 className="text-2xl mt-5 mb-2">? Why i make this</h2>
            <p className="text-sm tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsa
              autem ipsum illum commodi animi officia dolorem, aliquam nihil
              vitae delectus neque quas necessitatibus id adipisci corrupti
              beatae. Eum eaque fugit necessitatibus itaque amet quisquam
              commodi facere recusandae incidunt doloribus?
            </p>
          </div>
          <div className="self-start">
            <h2 className="text-2xl">Created by</h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {[...Array(5).keys()].map((i) => (
                <span className="btn">TypeScript</span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5 mt-5">
          <div className="w-sm">
            <h2 className="text-2xl mt-5 mb-2">? Features</h2>
            <ul className="space-y-2">
              <li className="flex items-center transition-all duration-150 cursor-pointer hover:bg-accent w-full py-2">
                <IoMdArrowDropleft className="text-2xl" /> ChatBot
              </li>
            </ul>
          </div>
          <div className="w-sm">
            <h2 className="text-2xl mt-5 mb-2">
              ! Coming <span className="badge badge-sm badge-info">new</span>
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center transition-all duration-150 cursor-pointer hover:bg-info w-full py-2">
                <IoMdArrowDropleft className="text-2xl" /> ChatBot
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-9">
        <h2 className="text-2xl mb-3"># More Projects</h2>
        {/* <div className="w-full overflow-x-auto scroll-smooth whitespace-nowrap py-4 px-2 space-x-4 flex snap-x snap-mandatory">
          {[...Array(10).keys()].map((i) => (
            <div
              key={i}
              className="card justify-center items-center shrink-0 w-80 h-64 bg-accent text-xl font-bold"
            >
              Slide 1
            </div>
          ))}
        </div> */}
        <CarouselContainer />
      </div>
    </div>
  )
}

export default DetailPage
