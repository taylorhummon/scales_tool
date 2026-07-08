import { Title } from "@triadsTool/Title"

import { RotateButton } from "@shared/components/button/RotateButton"
import { Clock } from "@shared/components/clock/Clock"
import { type Derived } from "@shared/utilities/derived"
import { Motion } from "@shared/utilities/motion"

import canvasRightCssModule from "./Canvas.module.scss"


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
      className={canvasRightCssModule["canvas"]}
      viewBox="0 0 430 306"
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
      <RotateButton
        derived={derived}
        clickHandler={buttonClickHandler}
        onClickMotion={Motion.RotateTriadCCW}
        className={canvasRightCssModule["rotate-button-ccw"]}
        dataTestid="rotate-triad-ccw"
      />
      <RotateButton
        derived={derived}
        clickHandler={buttonClickHandler}
        onClickMotion={Motion.RotateTriadCW}
        className={canvasRightCssModule["rotate-button-cw"]}
        dataTestid="rotate-triad-cw"
      />
    </svg>
  )
}
