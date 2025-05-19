import React, { useEffect, useRef, useState } from 'react'
import { TbFileCode } from 'react-icons/tb'

const Setting = () => {
  const [color, setColor] = useState(0)
  const [theme, setTheme] = useState(0)
  const [sidebar, setSidebar] = useState(0)

  useEffect(() => {}, [])

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const output = e.target.nextElementSibling as HTMLInputElement
    output.innerHTML = value
    output.style.setProperty('--value', value)
  }

  const colorArray = [
    'primary',
    'secondary',
    'accent',
    'info',
    'success',
    'warning',
    'error',
    'neutral',
  ]

  return (
    <>
      <div className="card gap-2 p-5 w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-light">Setting</h2>
          <label className="input input-sm rounded-2xl ">
            <TbFileCode className="text-lg opacity-70" />
            <input
              type="text"
              className="grow pt-1"
              placeholder="setting.name"
            />
          </label>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-20">
          <div className="flex flex-col gap-5">
            <label htmlFor="" className="label justify-between">
              <p className="font-normal">Font-Size</p>
              <input
                type="range"
                name=""
                className="range range-xs"
                onChange={handleRange}
                min={1}
                max={95}
              />
              <output className="badge text-warning font-semibold">00</output>
            </label>
            <label htmlFor="" className="label justify-between">
              <p className="font-normal">Card-Size</p>
              <input
                type="range"
                name=""
                className="range range-xs"
                onChange={handleRange}
                min={1}
                max={400}
              />
              <output className="badge text-warning font-semibold">00</output>
            </label>
            <label htmlFor="" className="label justify-between">
              <p className="font-normal">Grid-Size</p>
              <input
                type="range"
                name=""
                className="range range-xs"
                onChange={handleRange}
                min={1}
                max={10}
              />
              <output className="badge text-warning font-semibold">00</output>
            </label>
            <label htmlFor="" className="label justify-between">
              <p className="font-normal">Menu Position</p>
              <select className="select select-sm w-full max-w-xs">
                <option>Top</option>
                <option>Bottom</option>
                <option>Left /</option>
                <option>Right \</option>
              </select>
            </label>
            <label htmlFor="" className="label justify-between gap-5">
              <p className="font-normal">Sidebar Position</p>
              <input type="checkbox" className="toggle" />
              <select
                className="select select-sm w-full max-w-xs"
                disabled={false}
              >
                <option>Top</option>
                <option>Bottom</option>
                <option>Left /</option>
                <option>Right \</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col gap-5">
            <label htmlFor="" className="label justify-between">
              <p className="font-normal">Card-Color</p>
              <div className="grid grid-cols-6 gap-3">
                {colorArray.map((c, i) => (
                  <span
                    onClick={() => setColor(i)}
                    key={i}
                    className={`badge badge-${c} rounded cursor-pointer active:scale-95 transition-all duration-100 ${
                      i === color ? `rounded-full` : ''
                    }`}
                  ></span>
                ))}
              </div>
            </label>
            <label htmlFor="" className="label justify-between">
              <p className="font-normal">Theme-Color</p>
              <div className="grid grid-cols-6 gap-3">
                {colorArray.map((c, i) => (
                  <span
                    onClick={() => setTheme(i)}
                    key={i}
                    className={`badge badge-${c} rounded cursor-pointer active:scale-95 transition-all duration-100 ${
                      i === theme ? `rounded-full` : ''
                    }`}
                  ></span>
                ))}
              </div>
            </label>
            <label htmlFor="" className="label justify-between">
              <p className="font-normal">Sidebar-Color</p>
              <div className="grid grid-cols-6 gap-3">
                {colorArray.map((c, i) => (
                  <span
                    onClick={() => setSidebar(i)}
                    key={i}
                    className={`badge badge-${c} rounded cursor-pointer active:scale-95 transition-all duration-100 ${
                      i === sidebar ? `rounded-full` : ''
                    }`}
                  ></span>
                ))}
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
export default Setting
