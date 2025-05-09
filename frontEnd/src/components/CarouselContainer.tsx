import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const CarouselContainer = ({ data }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scroll = (d: string) => {
    if (scrollRef.current) {
      const scrollAmount = 340
      scrollRef.current?.scrollBy({
        left: d === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const el = scrollRef.current

    if (!el) return

    const handleWheel = (e) => {
      if (e.deltaY === 0) return

      e.preventDefault()
      el.scrollBy({
        left: e.deltaY < 0 ? -340 : 340,
        behavior: 'smooth',
      })
    }
    el.addEventListener('wheel', handleWheel)

    return () => {
      el.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div className="w-full relative">
      {/* <div className="absolute right-8 bottom-5 z-20 space-x-4">
        <button
          className="btn btn-sm btn-accent"
          onClick={() => scroll('prev')}
        >
          Prev
        </button>
        <button
          className="btn btn-sm btn-accent"
          onClick={() => scroll('next')}
        >
          Next
        </button>
      </div> */}
      <div
        ref={scrollRef}
        className="mt-9 flex gap-10 mx-auto p-10 mb-10 w-full overflow-x-auto scroll-smooth whitespace-nowrap snap-x snap-mandatory"
      >
        {data?.map(({ name, projectType }, i) => (
          <Link to={`/detail-page/${name}`} key={i}>
            <div className="w-80 h-64 shrink-0 card bg-gray-700 cursor-pointer transition-all duration-100 hover:-translate-2 active:scale-95 relative">
              <span className="badge absolute right-4 top-4">{projectType}</span>
              <img src="/logo.png" alt="" width={500} />
              <h2 className="text-xl font-normal absolute bottom-4 left-7">
                {name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CarouselContainer
