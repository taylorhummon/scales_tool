import { Caption } from "@scalesTool/Caption"
import { Title } from "@scalesTool/Title"

import { SwapButton } from "@shared/components/button/SwapButton"
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
  buttonClickHandler,
}: CanvasRightParameters): React.ReactNode {
  return (
    <svg
      className={canvasRightCssModule["canvas-right"]}
      viewBox="0 0 345 450"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Title
        derived={derived}
        className={canvasRightCssModule["title"]}
      />
      <Caption
        derived={derived}
        className={canvasRightCssModule["caption"]}
      />
      <Clock
        derived={derived}
        className={canvasRightCssModule["clock"]}
      />
      <SwapButton
        derived={derived}
        clickHandler={buttonClickHandler}
        className={canvasRightCssModule["swap-button"]}
      />
    </svg>
  )
}
