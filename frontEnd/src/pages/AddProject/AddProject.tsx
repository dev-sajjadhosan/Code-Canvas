import { SetStateAction, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { RiImageAddLine } from 'react-icons/ri'
import { TbDragDrop, TbFileCode, TbStackPush } from 'react-icons/tb'
import useZip from '../../hooks/useZip'
import CodeModal from './CodeModal'
import axios from 'axios'
import Toast from '../../components/Toast'
import { HiOutlineTrash } from 'react-icons/hi2'

interface FormData {
  name: string
  projectType: string
  projectStatus: string
  liveUrl: string
  repoUrl: string
  description: string
  whyMakeThis: string
}
const AddProject = () => {
  const t = new Date()
  const { register, handleSubmit, reset } = useForm<FormData>()
  // Define a type for files extracted from the zip
  interface ZipFile {
    name: string
    content: string
  }
  const { zipRef, extractZipFile, files, setFiles, loading, name } =
    useZip() as {
      zipRef: React.RefObject<HTMLInputElement>
      extractZipFile: (e: React.ChangeEvent<HTMLInputElement>) => void
      files: ZipFile[]
      setFiles: React.Dispatch<SetStateAction<ZipFile[]>>
      loading: boolean
      name: string
    }

  const [isOpen, setIsOpen] = useState(false)
  const imageRef = useRef<HTMLInputElement | null>(null)
  const featuresRef = useRef<HTMLInputElement | null>(null)
  const comingFeaturesRef = useRef<HTMLInputElement | null>(null)
  const [image, setImage] = useState<File | undefined>(undefined)
  const [features, setFeatures] = useState<string[]>([])
  const [comingFeatures, setComingFeatures] = useState<string[]>([])
  const [toggle, setToggle] = useState(false)
  const [toast, setToast] = useState<{
    title: string
    des: string
    type: string
  }>({ title: '', des: '', type: '' })

  const key = import.meta.env.VITE_IMG_KEY
  const api = `${import.meta.env.VITE_IMG_API}?key=${key}`

  const handleFeatures = () => {
    const data: string = featuresRef.current?.value ?? ''
    if (data === '') return
    if (!features.includes(data)) {
      setFeatures((prev) => [...prev, data])
      featuresRef.current!.value = ''
    }
    featuresRef.current!.value = ''
  }
  const handleComingFeatures = () => {
    const data: string = comingFeaturesRef.current?.value ?? ''
    if (data === '') return
    if (!comingFeatures.includes(data)) {
      setComingFeatures((prev) => [...prev, data])
      comingFeaturesRef.current!.value = ''
    }
    comingFeaturesRef.current!.value = ''
  }
  const handleImage = () => {
    const file: File | undefined = imageRef.current?.files?.[0]
    if (!file) return
    setImage(file)
  }

  const handleDropImage = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer.files?.[0]
    if (file) {
      setImage(file)
    }
  }

  const handlePushProject = async (e: FormData) => {
    // e.preventDefault()
    const file = image
    if (!file) return

    const formData = new FormData()
    formData.append('image', file)

    const res = await axios.post(api, formData)
    if (!res.data.data) return

    const data = {
      name: e.name,
      type: e.projectType,
      status: e.projectStatus,
      url: {
        liveUrl: e.liveUrl,
        repoUrl: e.repoUrl,
      },
      description: e.description,
      whyMakeThis: e.whyMakeThis,
      image: res.data?.data?.display_url,
      features,
      comingFeatures,
      codes: {
        html: files.find((f) => f.name.endsWith('.html'))?.content,
        css: files.find((f) => f.name.endsWith('.css'))?.content,
        ...(files.find((f) => f.name.endsWith('.js'))
          ? { js: files.find((f) => f.name.endsWith('.js'))?.content }
          : { ts: files.find((f) => f.name.endsWith('.ts'))?.content }),
      },
      times: {
        createdDate: t.toLocaleDateString(),
        createdTime: t.toLocaleTimeString(),
      },
    }
    if (data)
      await axios
        .post('http://localhost:3000/project/add-project', data)
        .then((re) => {
          setToast({
            title: 'Project Added!',
            des: 'The Project has been added to sever. Go to Home or Project Page to see the project.',
            type: 'success',
          })
          setToggle(true)
          console.log(re.data)
        })
    reset()
    setImage(undefined)
    setFeatures([])
    setComingFeatures([])
    setFiles([])
    setIsOpen(false)
  }

  return (
    <>
      <Toast
        toggle={toggle}
        setToggle={setToggle}
        title={toast?.title}
        des={toast?.des}
        type={toast?.type}
      />
      <CodeModal isOpen={isOpen} setIsOpen={setIsOpen} files={files} />
      {/* ------------- */}
      <form className="card p-3" onSubmit={handleSubmit(handlePushProject)}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Add Project</h2>
          <span className="btn btn-sm btn-neutral rounded-full font-semibold">
            Project #00
          </span>
        </div>
        <div className="mt-9 flex  justify-between">
          <div className="flex flex-col gap-5 w-lg">
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                defaultValue={name}
                className="input input-ghost w-full"
                placeholder="Project Name"
                {...register('name', { required: true })}
              />
              {loading ? (
                <span className="loading loading-dots mx-auto cursor-not-allowed"></span>
              ) : files.length > 0 ? (
                <div className="join">
                  <button
                    className="btn btn-primary join-item"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <TbFileCode size={18} /> Show Codes
                  </button>
                  <button
                    className="btn btn-error join-item tooltip"
                    data-tip="Delete Zip"
                    type="button"
                    onClick={() => setFiles([])}
                  >
                    <HiOutlineTrash className="text-lg" />
                  </button>
                </div>
              ) : (
                <input
                  type="file"
                  className="file-input file-input-ghost"
                  accept=".zip"
                  ref={zipRef}
                  onChange={extractZipFile}
                />
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select
                defaultValue="basic"
                className="select select-ghost"
                {...register('projectType', { required: true })}
              >
                <option disabled={true}>Project Type</option>
                <option value="none">None</option>
                <option value="basic">Basic</option>
                <option value="intermediate">Intermediate</option>
                <option value="professional">Professional</option>
              </select>
              <select
                defaultValue="public"
                className="select select-ghost"
                {...register('projectStatus', { required: true })}
              >
                <option disabled={true}>Project Status</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="input input-ghost w-full"
                placeholder="Live Url"
                {...register('liveUrl', { required: true })}
              />
              <input
                type="text"
                className="input input-ghost w-full"
                placeholder="Repo Url"
                {...register('repoUrl', { required: true })}
              />
            </div>
            <textarea
              className="textarea textarea-ghost w-full"
              rows={3}
              placeholder="Project Description"
              {...register('description', { required: true })}
            />
            <textarea
              className="textarea textarea-ghost w-full"
              rows={3}
              placeholder="Why i have make this ?"
              {...register('whyMakeThis', { required: true })}
            />
          </div>
          <div className="w-lg">
            <div>
              {image ? (
                <div className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    className="w-full h-46 object-center rounded-lg"
                  />
                  <label
                    htmlFor="project"
                    className="btn btn-sm btn-ghost absolute right-5 bottom-3 tooltip"
                    data-tip="Change Picture"
                  >
                    <input
                      type="file"
                      name=""
                      id="project"
                      hidden
                      ref={imageRef}
                      onChange={handleImage}
                    />
                    <RiImageAddLine className="text-lg" />
                  </label>
                </div>
              ) : (
                <label
                  htmlFor="project"
                  className="card justify-center items-center border h-44 duration-200 cursor-pointer active:scale-95 "
                  onDrop={handleDropImage}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <input
                    type="file"
                    name=""
                    id="project"
                    hidden
                    ref={imageRef}
                    onChange={handleImage}
                  />
                  <TbDragDrop className="text-3xl mb-2" />
                  Drag or Drop Picture Here
                </label>
              )}
            </div>
            <div className="mt-7">
              <div className="mt-3 group">
                <input
                  type="text"
                  className="input input-ghost join-item"
                  placeholder="Features"
                  ref={featuresRef}
                />
                <button
                  className="btn join-item"
                  onClick={handleFeatures}
                  type="button"
                >
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
                  type="button"
                >
                  Add
                </button>
              </div>
              <ul className="mt-5 flex gap-2 flex-wrap">
                {comingFeatures?.map((f, i) => (
                  <li key={i} className="badge">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <button className="btn btn-warning ml-auto" type="submit">
          <TbStackPush className="text-lg" /> Push Project
        </button>
      </form>
    </>
  )
}
export default AddProject
