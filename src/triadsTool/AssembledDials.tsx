import { IconName } from "@shared/components/button/Icon"
import { RankDial } from "@shared/components/dial/RankDial"
import { TriadDial } from "@shared/components/dial/TriadDial"
import { DialButton } from "@shared/components/dial/DialButton"
import { DialHighlighter } from "@shared/components/dial/DialHighlighter"
import { type Derived } from "@shared/utilities/derived"
import { Motion } from "@shared/utilities/motion"

import assembledDialsCssModule from "./AssembledDials.module.scss"


interface AssembledDialsParameters {
  derived: Derived,
  buttonClickHandler: (motion: Motion) => void,
  className?: string,
}

export function AssembledDials({
  derived,
  buttonClickHandler,
  className,
}: AssembledDialsParameters): React.ReactNode {
  return (
    <g className={className}>
      <defs>
        <clipPath id={CLIP_PATH_ID}>
          <rect
            x="-30"
            y="-103"
            width="60"
            height="206"
          />
        </clipPath>
      </defs>
      <DialButton
        derived={derived}
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        clickHandler={buttonClickHandler}
        iconName={IconName.RotateCW}
        onClickMotion={Motion.RotateTriadCW}
        className={assembledDialsCssModule["rotate-button-cw"]}
        dataTestid="rotate-triad-cw"
      />
      <DialButton
        derived={derived}
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        clickHandler={buttonClickHandler}
        iconName={IconName.Sharp}
        onClickMotion={Motion.IncrementBoth}
        className={assembledDialsCssModule["sharp-button"]}
        dataTestid="sharp-button"
      />
      <DialHighlighter
        width={104}
        height={30}
        className={assembledDialsCssModule["dial-highlighter"]}
      />
      <TriadDial
        derived={derived}
        clipPathId={CLIP_PATH_ID}
        className={assembledDialsCssModule["triad-dial"]}
      />
      <RankDial
        derived={derived}
        clipPathId={CLIP_PATH_ID}
        className={assembledDialsCssModule["rank-dial"]}
      />
      <DialButton
        derived={derived}
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        clickHandler={buttonClickHandler}
        iconName={IconName.RotateCCW}
        onClickMotion={Motion.RotateTriadCCW}
        className={assembledDialsCssModule["rotate-button-ccw"]}
        dataTestid="rotate-triad-ccw"
      />
      <DialButton
        derived={derived}
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        clickHandler={buttonClickHandler}
        iconName={IconName.Flat}
        onClickMotion={Motion.DecrementBoth}
        className={assembledDialsCssModule["flat-button"]}
        dataTestid="flat-button"
      />
    </g>
  )
}

const CLIP_PATH_ID = "assembled-triad-and-rank-dials-clip-path"

const BUTTON_WIDTH = 46
const BUTTON_HEIGHT = 40
