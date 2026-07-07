import { AssembledSlider } from "@modesTool/AssembledSlider"

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
      viewBox="0 0 80 370"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AssembledSlider
        derived={derived}
        buttonClickHandler={buttonClickHandler}
        className={canvasLeftCssModule["assembled-slider"]}
      />
    </svg>
  )
}
