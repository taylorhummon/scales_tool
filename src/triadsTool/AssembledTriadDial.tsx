import { IconName } from "@shared/components/button/Icon"
import { TriadDial } from "@shared/components/dial/TriadDial"
import { DialButton } from "@shared/components/dial/DialButton"
import { DialHighlighter } from "@shared/components/dial/DialHighlighter"

import { type Derived } from "@shared/utilities/derived"
import { Motion } from "@shared/utilities/motion"

import assembledTriadDialCssModule from "./AssembledTriadDial.module.scss"


interface AssembledTriadDialParameters {
  derived: Derived,
  buttonClickHandler: (motion: Motion) => void,
  className?: string,
}

export function AssembledTriadDial({
  derived,
  buttonClickHandler,
  className,
}: AssembledTriadDialParameters): React.ReactNode {
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
        className={assembledTriadDialCssModule["rotate-button-cw"]}
        dataTestid="rotate-triad-cw"
      />
      <DialHighlighter
        width={52}
        height={30}
        className={assembledTriadDialCssModule["dial-highlighter"]}
      />
      <TriadDial
        derived={derived}
        clipPathId={CLIP_PATH_ID}
        className={assembledTriadDialCssModule["triad-dial"]}
      />
      <DialButton
        derived={derived}
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        clickHandler={buttonClickHandler}
        iconName={IconName.RotateCCW}
        onClickMotion={Motion.RotateTriadCCW}
        className={assembledTriadDialCssModule["rotate-button-ccw"]}
        dataTestid="rotate-triad-ccw"
      />
    </g>
  )
}

const CLIP_PATH_ID = "assembled-triad-dial-clip-path"

const BUTTON_WIDTH = 46
const BUTTON_HEIGHT = 40
