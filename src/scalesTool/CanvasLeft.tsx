import { AssembledDials } from "@scalesTool/AssembledDials"

import { ModeSlider } from "@shared/components/slider/ModeSlider"
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
      viewBox="0 0 240 450"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AssembledDials
        derived={derived}
        buttonClickHandler={buttonClickHandler}
        className={canvasLeftCssModule["assembled-dials"]}
      />
      <ModeSlider
        derived={derived}
        className={canvasLeftCssModule["mode-slider"]}
      />
    </svg>
  )
}
