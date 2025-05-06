import { useRef, useState } from 'react'
import { IoMdArrowDropleft } from 'react-icons/io'
import { TbDragDrop } from 'react-icons/tb'

const AddProject = () => {
  const imageRef = useRef<HTMLInputElement | null>(null)
  const featuresRef = useRef<HTMLInputElement | null>(null)
  const comingFeaturesRef = useRef<HTMLInputElement | null>(null)
  const [features, setFeatures] = useState<String[] | undefined>([])
  const [comingFeatures, setComingFeatures] = useState<string[] | undefined>([])
  

  const handleFeatures = () => {
    const data = featuresRef.current?.value
    if (data === '') return

    if (!features.includes(data)) {
      setFeatures((prev) => [...prev, data])
      featuresRef.current!.value = ''
    }
    featuresRef.current!.value = ''
    console.log(features)
  }
  const handleComingFeatures = () => {
    const data = comingFeaturesRef.current?.value
    if (data === '') return

    if (!comingFeatures.includes(data)) {
      setComingFeatures((prev) => [...prev, data])
      comingFeaturesRef.current!.value = ''
    }
    comingFeaturesRef.current!.value = ''
    console.log(comingFeatures)
  }
  return (
    <>
      <div className="card p-3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Add Project</h2>
          <span className="btn btn-warning rounded-full font-semibold py-2">
            Project #00
          </span>
        </div>
        <div className="mt-9 flex  justify-between">
          <div className="flex flex-col gap-5 w-lg">
            <input
              type="text"
              className="input input-ghost w-full"
              placeholder="Project Name"
            />
            <div className="grid grid-cols-2 gap-4">
              <select
                defaultValue="Pick a font"
                className="select select-ghost"
              >
                <option disabled={true}>Project Type</option>
                <option>Basic</option>
                <option>Intermediate</option>
                <option>Professional</option>
              </select>
              <select
                defaultValue="Pick a font"
                className="select select-ghost"
              >
                <option disabled={true}>Project Status</option>
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="input input-ghost w-full"
                placeholder="Live Url"
              />
              <input
                type="text"
                className="input input-ghost w-full"
                placeholder="Repo Url"
              />
            </div>
            <textarea
              className="textarea textarea-ghost w-full"
              rows={3}
              placeholder="Project Description"
            />
            <textarea
              className="textarea textarea-ghost w-full"
              rows={3}
              placeholder="Why i have make this ?"
            />
          </div>
          <div className="w-lg">
            <div className="">
              <label
                htmlFor="project"
                className="card justify-center items-center border h-44 duration-200 cursor-pointer active:scale-95 "
              >
                <input type="file" name="" id="project" hidden ref={imageRef} />
                <TbDragDrop className="text-3xl mb-2" />
                Drag or Drop Picture Here
              </label>
            </div>
            <div className="mt-3">
              <div className="mt-3 group">
                <input
                  type="text"
                  className="input input-ghost join-item"
                  placeholder="Features"
                  ref={featuresRef}
                />
                <button className="btn join-item" onClick={handleFeatures}>
                  Add
                </button>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {features.map((f, i) => (
                  <li key={i} className="badge">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <div className="mt-3 group">
                <input
                  type="text"
                  className="input input-ghost join-item"
                  placeholder="Coming Features"
                  ref={comingFeaturesRef}
                />
                <button
                  className="btn join-item"
                  onClick={handleComingFeatures}
                >
                  Add
                </button>
              </div>
              <ul className="mt-5">
                {comingFeatures?.map((f, i) => (
                  <li key={i} className="badge">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddProject
