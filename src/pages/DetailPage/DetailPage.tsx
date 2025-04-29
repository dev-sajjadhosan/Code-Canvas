import { useState } from 'react'
import { IoMdArrowDropleft } from 'react-icons/io'
import { LuImageDown, LuImageUpscale } from 'react-icons/lu'
import CarouselContainer from '../../components/CarouselContainer'
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import { FaSquareJs } from 'react-icons/fa6'
import { TbBookDownload, TbClipboardCopy } from 'react-icons/tb'

const DetailPage = () => {
  const [pV, setPV] = useState(false)
  const [code, setCode] = useState(1)
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

      <div className="mt-10 flex flex-col">
        <div className="flex self-end mr-5 gap-2">
          <button
            role="tab"
            className={`btn ${
              code === 1 ? ' btn-accent' : 'btn-ghost'
            } tooltip`}
            data-tip="Html"
            onClick={() => setCode(1)}
          >
            <FaHtml5 className="text-lg" />
          </button>
          <button
            role="tab"
            className={`btn ${
              code === 2 ? ' btn-accent' : 'btn-ghost'
            } tooltip`}
            data-tip="Css"
            onClick={() => setCode(2)}
          >
            <FaCss3Alt className="text-lg" />
          </button>
          <button
            role="tab"
            className={`btn ${
              code === 3 ? ' btn-accent' : 'btn-ghost'
            } tooltip`}
            data-tip="JavaScript"
            onClick={() => setCode(3)}
          >
            <FaSquareJs className="text-lg" />
          </button>
        </div>
        <div className="mt-3 card bg-neutral-700 p-8 h-[40rem] overflow-auto relative">
          <div className="sticky top-1 flex items-center justify-end gap-3">
            <button className="btn btn-sm tooltip" data-tip="Copy">
              <TbClipboardCopy className="text-lg" />
            </button>
            <button className="btn btn-sm tooltip" data-tip="Download">
              <TbBookDownload className="text-lg" />
            </button>
          </div>
          <pre>
            <code className="text-sm transform transition-all duration-150">{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <div class="logo">John Doe</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="home">
      <h1>Hello, I'm John Doe</h1>
      <p>Frontend Developer</p>
    </section>
  </main>
  <script src="script.js"></script>
</body>
</html>`}</code>
          </pre>
        </div>
      </div>

      <div className="mt-15">
        <h2 className="text-2xl mb-1"># More Projects</h2>
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
