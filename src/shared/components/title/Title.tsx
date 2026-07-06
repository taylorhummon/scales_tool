import titleCssModule from "./Title.module.scss"


interface TitleParameters {
  className?: string,
  children: React.ReactNode,
}

export function Title({
  className,
  children,
}: TitleParameters): React.ReactNode {
  return (
    <g className={className}>
      <text
        className={titleCssModule["title-text"]}
        textAnchor="middle"
      >
        {children}
      </text>
    </g>
  )
}
