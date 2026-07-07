interface CaptionParameters {
  className?: string,
  children: React.ReactNode,
}

export function Caption({
  className,
  children,
}: CaptionParameters): React.ReactNode {
  return (
    <g className={className}>
      <text textAnchor="middle">
        {children}
      </text>
    </g>
  )
}
