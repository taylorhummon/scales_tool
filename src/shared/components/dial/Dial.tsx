import { buildClassName } from "@shared/utilities/css"

import dialCssModule from "./Dial.module.scss"


interface DialParameters {
  label: string,
  isIncrementing: boolean,
  isDecrementing: boolean,
  clipPathId: string,
  className?: string,
  children: React.ReactNode,
}

export function Dial({
  label,
  isIncrementing,
  isDecrementing,
  clipPathId,
  className,
  children,
}: DialParameters): React.ReactNode {
  return (
    <g className={className}>
      <text className={dialCssModule["label"]}>
        {label}
      </text>
      <g clipPath={`url(#${clipPathId})`}>
        <g className={dialCssModule["dial-inner"]}>
          <g className={getClassName(isIncrementing, isDecrementing)}>
            {children}
          </g>
        </g>
      </g>
    </g>
  )
}

function getClassName(
  isIncrementing: boolean,
  isDecrementing: boolean,
): string {
  const classNames = [ "dial-movable" ]
  if (isIncrementing) {
    classNames.push("move-down")
  } else if (isDecrementing) {
    classNames.push("move-up")
  }
  return buildClassName(dialCssModule, classNames)
}
