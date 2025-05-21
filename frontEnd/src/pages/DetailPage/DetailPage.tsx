import { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropleft } from 'react-icons/io'
import { LuImageDown, LuImageUpscale } from 'react-icons/lu'
import CarouselContainer from '../../components/CarouselContainer'
import { FaCss3Alt, FaGithub, FaHtml5 } from 'react-icons/fa'
import { FaSquareJs } from 'react-icons/fa6'
import { TbBookDownload, TbBrandCodepen, TbClipboardCopy } from 'react-icons/tb'
import { RiArrowRightUpLine } from 'react-icons/ri'
import useData from '../../hooks/useData'
import { Link, useParams } from 'react-router-dom'
import { BiLogoTypescript } from 'react-icons/bi'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { HiHome } from 'react-icons/hi2'

const DetailPage = () => {
  const { id } = useParams()
  const codeRef = useRef<HTMLElement | null>(null)
  // Define the type for your project data
  type ProjectData = {
    name?: string
    type?: string
    status?: string
    url?: { liveUrl?: string }
    description?: string
    whyIMakeThis?: string
    image?: string
    features?: string[]
    comingFeatures?: string[]
    codes?: {
      html?: string
      css?: string
      js?: string
      ts?: string
    }
  }

  const data = useData()
  const findData = data.find((d: ProjectData) => d?.name === id) as
    | ProjectData
    | undefined
  const {
    name,
    type,
    status,
    url,
    description,
    whyIMakeThis,
    image,
    features,
    comingFeatures,
    codes,
  } = findData ?? {}
  // console.log(Object.keys(findData ?? {}).join());
  const [pV, setPV] = useState(false)
  const [codeTab, setCodeTab] = useState('html')
  const [copy, setCopy] = useState('copy')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCodeCopy = () => {
    if (codeRef.current) {
      const text = codeRef.current.textContent
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          // alert('Text copied!')
          setCopy('Copied')
          setTimeout(() => {
            setCopy('Copy')
          }, 1000)
        })
      }
    }
  }

  const handleZipFile = () => {
    if (!codes) return

    const zip = new JSZip()
    zip.file('index.html', codes?.html || '')
    zip.file('style.css', codes?.css || '')
    if (codeTab === 'js') {
      zip.file('script.js', codes?.js || '')
    } else {
      zip.file('tsScript.js', codes?.ts || '')
    }

    zip.generateAsync({ type: 'blob' }).then((c) => {
      saveAs(c, `${name || 'project'}.zip`)
    })
  }

  return (
    <div className="p-10 relative">
      {/* image view */}

      <div
        className={`rounded-2xl transition-all duration-250 fixed ${
          pV ? 'top-1/2 opacity-100' : '-top-1/2 opacity-0'
        }  left-1/2 -translate-1/2 w-4xl h-[30rem] bg-black/40 backdrop-blur-sm z-20 flex flex-col justify-center items-center`}
      >
        <img src={image} alt="" className="card" width={600} />
        <button
          className="btn btn-ghost mt-5 px-8"
          onClick={() => setPV(false)}
        >
          <LuImageDown className="text-2xl" />
        </button>
      </div>

      <div className="w-11/12 mx-auto p-5">
        <div className="flex justify-between items-center mb-5">
          <Link
            to={'/'}
            className="btn btn-sm btn-ghost px-4 font-light tooltip "
            data-tip="Home"
          >
            <HiHome className="text-lg" />
          </Link>
          <h2 className="text-2xl text-right"># Project $00</h2>
        </div>
        <div className="flex justify-between gap-3 w-full">
          <div className="relative">
            <img src={image} alt="" width={400} className="" />
            <button
              className="btn btn-sm btn-ghost absolute bottom-5 right-5"
              onClick={() => setPV(true)}
            >
              <LuImageUpscale className="text-lg" />
            </button>
          </div>
          <div className="p-4 w-xl space-y-2">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl ">
                {name} <span className="badge badge-xs">{type}</span>
              </h1>
              <span className="badge badge-info font-semibold capitalize">
                {status}
              </span>
            </div>
            <p className="text-sm tracking-wide first-letter:text-3xl">
              {description}
            </p>
            <div className="mt-5 space-x-1 ml-5">
              <a href={`https://${url?.liveUrl}`} className="btn btn-link">
                Live <RiArrowRightUpLine className="text-lg" />
              </a>
              <button disabled className="btn btn-link">
                github <FaGithub className="text-lg" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5 mt-5">
          <div className="w-xl">
            <h2 className="text-2xl mt-5 mb-2">? Why i make this</h2>
            <p className="text-sm tracking-wide">{whyIMakeThis}</p>
          </div>
          <div className="self-start">
            <h2 className="text-2xl">Created by</h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {Object.keys(codes ?? {}).map((name) => (
                <button key={name} className={`btn btn-sm btn-ghost`}>
                  {name === 'html' ? (
                    <>
                      {' '}
                      <FaHtml5 className="text-sm" /> Html
                    </>
                  ) : name === 'css' ? (
                    <>
                      <FaCss3Alt className="text-sm" /> Css
                    </>
                  ) : name === 'js' ? (
                    <>
                      <FaSquareJs className="text-sm" /> JavaScript
                    </>
                  ) : (
                    <>
                      <BiLogoTypescript className="text-lg" /> TypeScript
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5 mt-5">
          <div className="w-sm">
            <h2 className="text-2xl mt-5 mb-2">? Features</h2>
            <ul className="space-y-2">
              {features?.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center transition-all duration-150 cursor-pointer hover:bg-accent w-full py-2"
                >
                  <IoMdArrowDropleft className="text-2xl" /> {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-sm">
            <h2 className="text-2xl mt-5 mb-2">
              ! Coming <span className="badge badge-sm badge-info">new</span>
            </h2>
            <ul className="space-y-2">
              {comingFeatures?.map((coming, i) => (
                <li
                  key={i}
                  className="flex items-center transition-all duration-150 cursor-pointer hover:bg-info w-full py-2"
                >
                  <IoMdArrowDropleft className="text-2xl" /> {coming}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col">
        <div className="flex self-end mr-5 gap-2">
          {Object.keys(codes ?? {}).map((name) => (
            <button
              key={name}
              role="tab"
              className={`btn btn-sm ${
                codeTab === name ? ' btn-accent' : 'btn-ghost'
              } tooltip`}
              data-tip={name}
              onClick={() => setCodeTab(name)}
            >
              {name === 'html' ? (
                <FaHtml5 className="text-sm" />
              ) : name === 'css' ? (
                <FaCss3Alt className="text-sm" />
              ) : name === 'js' ? (
                <FaSquareJs className="text-sm" />
              ) : (
                <BiLogoTypescript className="text-lg" />
              )}
            </button>
          ))}
        </div>
        <div className="mt-3 card bg-neutral-700 p-10 min-h-80 overflow-auto relative">
          <div className="sticky top-0 flex items-center justify-between mb-3">
            <p className="text-sm text-info font-semibold flex items-center gap-1">
              ./
              {codeTab === 'html' ? (
                <FaHtml5 className="text-lg" />
              ) : codeTab === 'css' ? (
                <FaCss3Alt className="text-lg" />
              ) : codeTab === 'js' ? (
                <FaSquareJs className="text-lg" />
              ) : (
                <BiLogoTypescript className="text-lg" />
              )}
              {codeTab}
            </p>
            <div className="flex items-center gap-3">
              <button
                className="btn btn-sm tooltip tooltip-bottom"
                data-tip={copy}
                onClick={handleCodeCopy}
              >
                <TbClipboardCopy className="text-lg" />
              </button>
              <button
                className="btn btn-sm tooltip tooltip-bottom"
                data-tip="Download"
                onClick={handleZipFile}
              >
                <TbBookDownload className="text-lg" />
              </button>
              <button
                className="btn btn-sm tooltip tooltip-bottom"
                data-tip="CodePen"
                // onClick={handleZipFile}
                disabled
              >
                <TbBrandCodepen className="text-lg" />
              </button>
            </div>
          </div>
          <pre className="h-[40rem]">
            <code
              className="text-sm transform transition-all duration-150 pb-4"
              ref={codeRef}
            >
              {codeTab === 'html'
                ? codes?.html
                : codeTab === 'css'
                ? codes?.css
                : codeTab === 'js'
                ? codes?.js
                : codes?.ts}
            </code>
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
        <CarouselContainer data={data} />
      </div>
    </div>
  )
}

export default DetailPage
