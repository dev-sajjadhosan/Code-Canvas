import { useRef, useState } from 'react'
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

const DetailPage = () => {
  const { id } = useParams()
  const codeRef = useRef<HTMLElement | null>(null)
  const data = useData()
  const findData = data.find((d) => d?.name === id)
  const {
    name,
    category,
    projectType,
    langUsed,
    like,
    view,
    comment,
    liveLink,
    githubRepoLink,
    description,
    whyIMakeThis,
    image,
    features,
    comingFeatures,
    code,
  } = findData ?? {}
  // console.log(Object.keys(findData ?? {}).join());
  const [pV, setPV] = useState(false)
  const [codeTab, setCodeTab] = useState('HTML')
  const [copy, setCopy] = useState('copy')

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
    if (!code) return

    const zip = new JSZip()
    zip.file('index.html', code?.HTML || '')
    zip.file('style.css', code?.CSS || '')
    if (codeTab === 'JavaScript') {
      zip.file('script.js', code?.JavaScript || '')
    } else {
      zip.file('tsScript.js', code?.TypeScript || '')
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

      <div className="w-11/12 mx-auto p-5">
        <h2 className="text-2xl text-right mb-3"># Project $00</h2>
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
              {name} <span className="badge badge-xs">{projectType}</span>
            </h1>
            <p className="text-sm tracking-wide first-letter:text-3xl">
              {description}
            </p>
            <div className="mt-5 space-x-1 ml-5">
              <Link
                to={'https://github.com/dev-sajjadhosan?tab=repositories'}
                className="btn btn-link"
              >
                Live <RiArrowRightUpLine className="text-lg" />
              </Link>
              <Link
                to={'https://github.com/dev-sajjadhosan?tab=repositories'}
                className="btn btn-link"
              >
                github <FaGithub className="text-lg" />
              </Link>
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
              {langUsed?.map((lang, i) => (
                <span className="btn" key={i}>
                  {lang}
                </span>
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
          {Object.keys(code ?? {}).map((name) => (
            <button
              key={name}
              role="tab"
              className={`btn btn-sm ${
                codeTab === name ? ' btn-accent' : 'btn-ghost'
              } tooltip`}
              data-tip={name}
              onClick={() => setCodeTab(name)}
            >
              {name === 'HTML' ? (
                <FaHtml5 className="text-sm" />
              ) : name === 'CSS' ? (
                <FaCss3Alt className="text-sm" />
              ) : name === 'JavaScript' ? (
                <FaSquareJs className="text-sm" />
              ) : (
                <BiLogoTypescript className="text-lg" />
              )}
            </button>
          ))}
        </div>
        <div className="mt-3 card bg-neutral-700 p-8 min-h-80 overflow-auto relative">
          <div className="sticky top-0 flex items-center justify-between mb-3">
            <p className="text-sm text-info font-semibold flex items-center gap-1">
              ./
              {codeTab === 'HTML' ? (
                <FaHtml5 className="text-lg" />
              ) : codeTab === 'CSS' ? (
                <FaCss3Alt className="text-lg" />
              ) : codeTab === 'JavaScript' ? (
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
          <pre>
            <code
              className="text-sm transform transition-all duration-150"
              ref={codeRef}
            >
              {codeTab === 'HTML'
                ? code?.HTML
                : codeTab === 'CSS'
                ? code?.CSS
                : codeTab === 'JavaScript'
                ? code?.JavaScript
                : code?.TypeScript}
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
