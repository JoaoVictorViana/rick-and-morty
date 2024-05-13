import MonitorIcon from '@/assets/monitor.svg'
import { PropsWithChildren } from 'react'

export const Monitor = ({ children }: PropsWithChildren) => {
  return (
    <section className="h-[70%] w-auto relative">
      <MonitorIcon className="w-full h-full z-1" />
      <div className="absolute z-2 h-[65%] w-[55%] top-[20%] left-[15%] 2xl:h-[70%] 2xl:w-[55%] 2xl:top-[15%] 2xl:left-[15%]">
        {children}
      </div>
    </section>
  )
}
