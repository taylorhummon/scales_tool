import { AssembledTriadDial } from "@triadsTool/AssembledTriadDial"

import { type Derived } from "@shared/utilities/derived"
import { type Motion } from "@shared/utilities/motion"

import canvasLeftNarrowCssModule from "./CanvasLeftNarrow.module.scss"


interface CanvasLeftNarrowParameters {
  derived: Derived,
  buttonClickHandler: (motion: Motion) => void,
}

export function CanvasLeftNarrow({
  derived,
  buttonClickHandler,
}: CanvasLeftNarrowParameters): React.ReactNode {
  return (
    <svg
      className={canvasLeftNarrowCssModule["canvas-left-narrow"]}
      viewBox="0 0 56 405"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AssembledTriadDial
        derived={derived}
        buttonClickHandler={buttonClickHandler}
        className={canvasLeftNarrowCssModule["assembled-triad-dial"]}
      />
    </svg>
  )
}
