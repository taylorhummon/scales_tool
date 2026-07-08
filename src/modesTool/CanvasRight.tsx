import { Title } from "@modesTool/Title"
import { Caption } from "@modesTool/Caption"

import { Clock } from "@shared/components/clock/Clock"
import { type Derived } from "@shared/utilities/derived"
import { Motion } from "@shared/utilities/motion"

import canvasRightCssModule from "./CanvasRight.module.scss"


interface CanvasRightParameters {
  derived: Derived,
  buttonClickHandler: (motion: Motion) => void,
}

export function CanvasRight({
  derived,
}: CanvasRightParameters): React.ReactNode {
  return (
    <svg
      className={canvasRightCssModule["canvas-right"]}
      viewBox="0 0 300 355"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Title
        derived={derived}
        className={canvasRightCssModule["title"]}
      />
      <Clock
        derived={derived}
        className={canvasRightCssModule["clock"]}
      />
      <Caption
        derived={derived}
        className={canvasRightCssModule["caption"]}
      />
    </svg>
  )
}
