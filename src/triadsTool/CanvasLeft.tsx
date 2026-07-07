import { AssembledDial } from "@triadsTool/AssembledDial"

import { type Derived } from "@shared/utilities/derived"
import { Motion } from "@shared/utilities/motion"

import canvasLeftCssModule from "./CanvasLeft.module.scss"


interface CanvasLeftParameters {
  derived: Derived,
  buttonClickHandler: (motion: Motion) => void,
}

export function CanvasLeft({
  derived,
  buttonClickHandler,
}: CanvasLeftParameters): React.ReactNode {
  return (
    <svg
      className={canvasLeftCssModule["canvas-left"]}
      viewBox="0 0 60 380"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AssembledDial
        derived={derived}
        buttonClickHandler={buttonClickHandler}
        className={canvasLeftCssModule["assembled-rank-dial"]}
      />
    </svg>
  )
}
