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
      {getTitleText(derived)}
    </TitleCommon>
  )
}

function getTitleText(
  derived: Derived,
): React.ReactNode {
  if (derived.clockSettings.insideLabelsOption === LabelsOption.Ordinary) {
    return whenUsingOrdinaryNotes(derived)
  } else {
    return whenUsingSimplifiedNotes(derived)
  }
}

function whenUsingSimplifiedNotes(
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

function whenUsingOrdinaryNotes(
  derived: Derived,
): React.ReactNode {
  const { currentMusicalKey, currentTriadOffset } = derived
  const triadOffsetSolfegeLetter = solfegeLetterFromButterflyIndex(getBalancedMod7(currentTriadOffset))
  const triadOffsetNote = currentMusicalKey.noteFromSolfegeLetter(triadOffsetSolfegeLetter)
  const quality = getTriadQuality(currentMusicalKey, currentTriadOffset)

  return (
    <>
      The <tspan className="fixed-width-font bold">{triadOffsetNote.name}</tspan> {quality} Triad
    </>
  )
}
