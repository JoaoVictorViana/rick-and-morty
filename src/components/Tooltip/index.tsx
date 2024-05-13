type Props = {
  className?: string
  text: string
}

export const Tooltip = ({ className, text }: Props) => {
  return (
    <div className="w-full tooltip">
      <span
        className={`${className} block text-ellipsis whitespace-nowrap w-[60%] 2xl:w-[80%] overflow-hidden`}
      >
        {text}
      </span>
      <span className="tooltiptext">{text}</span>
    </div>
  )
}
