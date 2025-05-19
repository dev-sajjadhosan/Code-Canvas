import no_data from '../assets/no-data.svg'
const EmptyContainer = ({ title, des }) => {
  return (
    <>
      <div className="card p-10 w-xl mx-auto translate-y-1/2 ">
        <div className="flex flex-col items-center justify-center">
          <img src={no_data} alt="empty" width={100} />
          <h3 className="text-lg font-semibold mt-4">{title}</h3>
          <p className="text-sm text-gray-500 mt-2">
            {des}
          </p>
        </div>
      </div>
    </>
  )
}

export default EmptyContainer
