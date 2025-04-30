import useAuth from '../hooks/useAuth'

const DashboardProve = () => {
  const { handleGP } = useAuth()
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="card w-lg p-10 bg-neutral">
          <p className="text-sm first-letter:text-2xl tracking-wide">
            Please click the button to prove your self.
          </p>

          <div className="flex items-center justify-center gap-4 mt-5">
            <button className="btn btn-warning px-6" onClick={handleGP}>
              Google Prove
            </button>
            <button className="btn btn-warning px-6" disabled>
              Github Prove
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardProve
