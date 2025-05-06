import { FaPersonWalkingArrowRight } from 'react-icons/fa6'
import useAuth from '../../hooks/useAuth'
import { TbUserEdit } from 'react-icons/tb'

const Logout = () => {
  const { user, handleLogout } = useAuth()
  const { displayName, email, photoURL } = user
  console.log(user)
  return (
    <>
      <div className="card gap-20 flex-row p-20 w-11/12">
        <img
          src={
            'https://marketplace.canva.com/EAFqhoRVTgA/1/0/1600w/canva-grey-and-blue-cute-cartoon-anime-manga-illustrated-boy-profile-photo-avatar-u9aFvuQMzUk.jpg'
          }
          alt=""
          width={300}
          className="avatar object-contain transition-all duration-100 hover:border rounded-full p-5 cursor-pointer"
        />
        <div className="text-left space-y-1 mt-18">
          <h2 className="text-3xl font-normal">{displayName}</h2>
          <h3 className="text-lg tracking-wide">{email}</h3>
          <p className="text-sm font-semibold">
            "Success doesn’t stop here — come back soon and keep building your
            dreams!"
          </p>
          <div className="mt-10 flex items-center gap-5">
            <button className="btn btn-warning px-6">
              <TbUserEdit className="text-lg" />
              Update Me
            </button>
            <button className="btn btn-error px-6" onClick={handleLogout}>
              <FaPersonWalkingArrowRight className="text-lg" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Logout
