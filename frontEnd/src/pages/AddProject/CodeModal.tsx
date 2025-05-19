import { useEffect, useRef, useState } from 'react'
import { FaCss3Alt, FaHtml5, FaSquareJs } from 'react-icons/fa6'
import { BiLogoTypescript } from 'react-icons/bi'
import { TbChevronUp } from 'react-icons/tb'

const getIconForFile = (filename: string) => {
  if (filename.endsWith('.html')) return <FaHtml5 className="text-sm" />
  if (filename.endsWith('.css')) return <FaCss3Alt className="text-sm" />
  if (filename.endsWith('.js')) return <FaSquareJs className="text-sm" />
  if (filename.endsWith('.ts')) return <BiLogoTypescript className="text-lg" />
  return null
}

const CodeModal = ({ isOpen, setIsOpen, files }) => {
  const codeRef = useRef<HTMLElement | null>(null)
  const [codeTab, setCodeTab] = useState('')

  useEffect(() => {
    // Automatically set the first file as active tab when files change
    if (files.length > 0) {
      setCodeTab(files[0].name)
    }
  }, [files])

  const currentFile = files.find((f) => f.name === codeTab)

  return (
    <>
      <div
        className={`card min-w-3xl fixed transition-all duration-200 z-30 ${
          isOpen
            ? 'top-0 left-1/2 -translate-x-1/2'
            : '-top-1/1 left-0 -translate-y-1/2'
        }`}
      >
        <div className="mt-10 flex flex-col">
          <div className="flex self-end mr-5 gap-2">
            {files.map((file) => (
              <button
                key={file.name}
                role="tab"
                className={`btn btn-sm ${
                  codeTab === file.name ? 'btn-accent' : 'btn-ghost'
                } tooltip`}
                data-tip={file.name}
                onClick={() => setCodeTab(file.name)}
              >
                {getIconForFile(file.name)}
              </button>
            ))}
            <button
              className="btn btn-sm btn-ghost tooltip"
              data-tip="close"
              onClick={() => setIsOpen(false)}
            >
              <TbChevronUp className="text-lg" />
            </button>
          </div>
          <div className="mt-1 card bg-neutral-700 p-8 min-h-80 overflow-auto relative">
            <div className="sticky top-0 flex items-center justify-between mb-3">
              <p className="text-sm text-info font-semibold flex items-center gap-1">
                ./ {getIconForFile(codeTab)} {codeTab}
              </p>
            </div>
            <pre className="overflow-y-scroll h-[24rem]">
              <code
                className="text-sm transform transition-all duration-150 whitespace-pre-wrap"
                ref={codeRef}
              >
                {currentFile?.content || '// File content not available'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>
  )
}

export default CodeModal
