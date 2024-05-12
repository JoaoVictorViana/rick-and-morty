import MonitorIcon from '@/assets/monitor.svg'
import { PropsWithChildren } from 'react'

export const Monitor = ({ children }: PropsWithChildren) => {
  return (
    <section className="h-[30%] md:h-[60%] 2xl:h-[70%] w-auto relative">
      <MonitorIcon className="w-full h-full z-1" />
      <div className="absolute 2xl:h-[70%] 2xl:w-[55%] z-2 2xl:top-[15%] 2xl:left-[15%]">
        {children}
      </div>
    </section>
  )
}
