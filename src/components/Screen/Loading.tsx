import { useEffect, useRef } from 'react'

export const LoadingScreen = () => {
  const screenRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    if (!screenRef.current) return

    setTimeout(() => {
      if (!screenRef.current) return

      screenRef.current.style.opacity = '0'
    }, 3000)
  }, [screenRef.current])

  return (
    <section className=" z-10 absolute ease-out opacity-1" ref={screenRef}>
      <img
        src="/rick-and-morty/loading.gif"
        className="2xl:w-[70vh] h-[50vh] object-cover object-bottom "
        alt="Loading Screen"
      />
    </section>
  )
}
