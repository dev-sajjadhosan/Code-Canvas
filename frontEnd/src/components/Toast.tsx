import React, { useEffect } from 'react'
import { HiOutlineBell } from 'react-icons/hi2'

type ToastProps = {
  toggle: boolean
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
  title?: string
  des?: string
  type?: string
}

const Toast: React.FC<ToastProps> = ({
  toggle,
  setToggle,
  title,
  des,
  type,
}) => {
  useEffect(() => {
    const time = setTimeout(() => {
      setToggle(false)
    }, 300)

    return clearTimeout(time)
  }, [setToggle])

  return (
    <>
      <div
        className={`fixed card p-10 shadow flex flex-col justify-center items-center gap-3 z-50 transition-all duration-200 ${
          toggle
            ? 'top-1/2 left-1/2 -translate-1/2'
            : '-top-1/2 -left-1/2 -translate-1/2'
        }
        ${
          type === 'error'
            ? 'bg-error text-error-content'
            : 'bg-success text-success-content'
        }
        `}
      >
        <HiOutlineBell className="text-2xl ml-auto" />
        <p className="text-semibold text-xl">{title}</p>
        <p className="font-normal tracking-wide w-lg text-center text-sm">
          {des}
        </p>
        <div className="flex items-center justify-end gap-3 w-full">
          {/* <button className="btn btn-sm btn-warning">Accept</button> */}
          <button
            className={`btn ${
              type === 'error' ? 'btn-neutral' : 'btn-primary'
            }`}
            onClick={() => setToggle(false)}
          >
            Decline
          </button>
        </div>
      </div>
    </>
  )
}

export default Toast
