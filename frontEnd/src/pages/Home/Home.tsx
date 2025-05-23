import ProjectSection from '../../components/Projects'
// import Toast from '../../components/Toast'

const Home = () => {
  return (
    <>
      <div className="p-5 min-h-screen flex flex-col gap-4 justify-center items-center w-11/12 text-center mx-auto">
        <img src="/logo.png" alt="" width={150} />
        <h1 className="text-2xl lg:text-3xl">Hey There,</h1>
        <h1 className="text-2xl lg:text-3xl">
          My Journey Through with HTML, CSS, JS & TS{' '}
        </h1>
        <p className="text-sm lg:w-3/4">
          A collection of foundational projects showcasing my skills in core web
          technologies. Each project demonstrates my understanding of structure
          (HTML5), styling (CSS3), dynamic behavior (JavaScript), and type-safe
          development (TypeScript).
        </p>
      </div>
      <ProjectSection />
      {/* <Toast
        title="Project Added!"
        des="A collection of foundational projects showcasing my skills in core web technologies. Each project demonstrates my understanding of structure (HTML5), styling (CSS3), "
        type="success"
      /> */}
    </>
  )
}
export default Home
