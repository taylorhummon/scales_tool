import { Dial } from "@shared/components/dial/Dial"
import { DialValue } from "@shared/components/dial/DialValue"
import { type Derived } from "@shared/utilities/derived"
import { EXTENDED_POSITIONS } from "@shared/utilities/dial"
import { getBalancedMod7 } from "@shared/utilities/math"
import { Motion } from "@shared/utilities/motion"
import { type SimplifiedLetter, simplifiedLetterFromButterflyIndex } from "@shared/utilities/simplifiedLetter"


interface TriadDialParameters {
  derived: Derived,
  clipPathId: string,
  className?: string,
}

export function TriadDial({
  derived,
  clipPathId,
  className,
}: TriadDialParameters): React.ReactNode {
  const { motion, currentTriadOffset, nextTriadOffset } = derived
  const pairs = EXTENDED_POSITIONS.map(
    (position) => ({
      position,
      simplifiedLetter: getSimplifiedLetter(currentTriadOffset, position)
    })
  )
  const triadOffsetDifference = nextTriadOffset - currentTriadOffset

  return (
    <Dial
      className={className}
      label="Triad"
      isIncrementing={motion === Motion.RotateTriadCW}
      isDecrementing={motion === Motion.RotateTriadCCW}
      clipPathId={clipPathId}
    >
      {pairs.map(({ position, simplifiedLetter }) => (
        <DialValue
          key={position}
          currentPosition={position}
          nextPosition={position - triadOffsetDifference}
        >
          {simplifiedLetter}
        </DialValue>
      ))}
    </Dial>
  )
}

function getSimplifiedLetter(
  currentTriadOffset: number,
  position: number,
): SimplifiedLetter {
  return simplifiedLetterFromButterflyIndex(getBalancedMod7(currentTriadOffset + position))
}
