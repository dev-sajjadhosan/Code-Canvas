const ViewModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`card min-w-3xl bg-base-300 p-10 fixed transition-all duration-200 z-30 ${
          isOpen
            ? 'top-1/2 left-1/2 -translate-1/2'
            : '-top-1/1 left-0 -translate-y-1/2'
        }`}
      >
        <p className="text-3xl text-center">
          <span className="loading loading-bars mx-2"></span>
          Working
          <span className="loading loading-bars mx-2"></span>
        </p>
        <button
          className="btn btn-sm btn-error mt-7 mx-auto px-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          Close
        </button>
      </div>
    </>
  )
}
export default ViewModal
