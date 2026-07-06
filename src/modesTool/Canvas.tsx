import { AssembledSlider } from "@modesTool/AssembledSlider"
import { Caption } from "@modesTool/Caption"

import { Clock } from "@shared/components/clock/Clock"
import { type Derived } from "@shared/utilities/derived"
import { Motion } from "@shared/utilities/motion"

import canvasCssModule from "./Canvas.module.scss"


interface CanvasParameters {
  derived: Derived,
  buttonClickHandler: (motion: Motion) => void,
}

export function Canvas({
  derived,
  buttonClickHandler,
}: CanvasParameters): React.ReactNode {
  return (
    <svg
      className={canvasCssModule["canvas"]}
      viewBox="0 0 450 370"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AssembledSlider
        derived={derived}
        buttonClickHandler={buttonClickHandler}
        className={canvasCssModule["assembled-slider"]}
      />
      <Clock
        derived={derived}
        className={canvasCssModule["clock"]}
      />
      <Caption
        derived={derived}
        className={canvasCssModule["caption"]}
      />
    </svg>
  )
}
