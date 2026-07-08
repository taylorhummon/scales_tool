import { Title as TitleCommon } from "@shared/components/title/Title"
import { type Derived } from "@shared/utilities/derived"
import { getBalancedMod7 } from "@shared/utilities/math"
import { simplifiedLetterFromButterflyIndex } from "@shared/utilities/simplifiedLetter"
import { getTriadQuality } from "@shared/utilities/triad"


interface TitleParameters {
  derived: Derived,
  className?: string,
}

export function Title({
  derived,
  className,
}: TitleParameters): React.ReactNode {
  return (
    <TitleCommon className={className}>
      {getTitleText(derived)}
    </TitleCommon>
  )
}

function getTitleText(
  derived: Derived,
): React.ReactNode {
  const { currentMusicalKey, currentTriadOffset } = derived
  const simplifiedLetter = simplifiedLetterFromButterflyIndex(getBalancedMod7(currentTriadOffset))
  const quality = getTriadQuality(currentMusicalKey, currentTriadOffset)

  return (
    <>
      The <tspan className="fixed-width-font bold">{simplifiedLetter}</tspan> {quality} Triad
    </>
  )
}
