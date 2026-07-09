import { AssembledDials } from "@triadsTool/AssembledDials"

import { type Derived } from "@shared/utilities/derived"
import { Motion } from "@shared/utilities/motion"

import canvasLeftWideCssModule from "./CanvasLeftWide.module.scss"


interface CanvasLeftWideParameters {
  derived: Derived,
  buttonClickHandler: (motion: Motion) => void,
}

export function CanvasLeftWide({
  derived,
  buttonClickHandler,
}: CanvasLeftWideParameters): React.ReactNode {
  return (
    <svg
      className={canvasLeftWideCssModule["canvas-left-wide"]}
      viewBox="0 0 108 405"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AssembledDials
        derived={derived}
        buttonClickHandler={buttonClickHandler}
        className={canvasLeftWideCssModule["assembled-dials"]}
      />
    </svg>
  )
}
