import { Title as TitleCommon } from "@shared/components/title/Title"
import { LabelsOption } from "@shared/utilities/clock"
import { type Derived } from "@shared/utilities/derived"
import { getBalancedMod7 } from "@shared/utilities/math"
import { simplifiedLetterFromButterflyIndex } from "@shared/utilities/simplifiedLetter"
import { solfegeLetterFromButterflyIndex } from "@shared/utilities/solfegeLetter"
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
      {getText(derived)}
    </TitleCommon>
  )
}

function getText(
  derived: Derived,
): React.ReactNode {
  if (derived.clockSettings.insideLabelsOption === LabelsOption.Ordinary) {
    return whenUsingOrdinaryLabels(derived)
  }
  if (derived.clockSettings.insideLabelsOption === LabelsOption.Simplified) {
    return whenUsingSimplifiedLabels(derived)
  }
  return null
}

function whenUsingOrdinaryLabels(
  derived: Derived,
): React.ReactNode {
  const { currentMusicalKey, currentTriadOffset } = derived
  const triadOffsetSolfegeLetter = solfegeLetterFromButterflyIndex(getBalancedMod7(currentTriadOffset))
  const triadOffsetNote = currentMusicalKey.noteFromSolfegeLetter(triadOffsetSolfegeLetter)
  const quality = getTriadQuality(currentMusicalKey, currentTriadOffset)

  return (
    <>
      The <tspan className="fixed-width-font">{triadOffsetNote.name}</tspan> {quality} Triad
    </>
  )
}

function whenUsingSimplifiedLabels(
  derived: Derived,
): React.ReactNode {
  const { currentMusicalKey, currentTriadOffset } = derived
  const simplifiedLetter = simplifiedLetterFromButterflyIndex(getBalancedMod7(currentTriadOffset))
  const quality = getTriadQuality(currentMusicalKey, currentTriadOffset)

  return (
    <>
      The <tspan className="fixed-width-font">{simplifiedLetter}</tspan> {quality} Triad
    </>
  )
}
