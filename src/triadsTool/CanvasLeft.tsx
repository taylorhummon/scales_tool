import { CanvasLeftNarrow } from "@triadsTool/CanvasLeftNarrow"
import { CanvasLeftWide } from "@triadsTool/CanvasLeftWide"
import { LabelsOption } from "@shared/utilities/clock"

import { type Derived } from "@shared/utilities/derived"
import { type Motion } from "@shared/utilities/motion"


interface CanvasLeftParameters {
  derived: Derived,
  buttonClickHandler: (motion: Motion) => void,
}

export function CanvasLeft({
  derived,
  buttonClickHandler,
}: CanvasLeftParameters): React.ReactNode {
  const { clockSettings } = derived
  const { insideLabelsOption } = clockSettings
  const isUsingWide = insideLabelsOption === LabelsOption.Ordinary
  if (isUsingWide) {
    return (
      <CanvasLeftWide
        derived={derived}
        buttonClickHandler={buttonClickHandler}
      />
    )
  } else {
    return (
      <CanvasLeftNarrow
        derived={derived}
        buttonClickHandler={buttonClickHandler}
      />
    )
  }
}
