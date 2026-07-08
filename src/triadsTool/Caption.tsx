import { Caption as CaptionCommon } from "@shared/components/caption/Caption"
import { type Derived } from "@shared/utilities/derived"
import { getTriadPattern } from "@shared/utilities/triad"


interface CaptionParameters {
  derived: Derived,
  className?: string,
}

export function Caption({
  derived,
  className,
}: CaptionParameters): React.ReactNode {
  return (
    <CaptionCommon className={className}>
      {getCaptionText(derived)}
    </CaptionCommon>
  )
}

function getCaptionText(
  derived: Derived,
): React.ReactNode {
  const { currentMusicalKey, currentTriadOffset } = derived
  const pattern = getTriadPattern(currentMusicalKey, currentTriadOffset)

  return (
    <>
      Has pattern {pattern}.
    </>
  )
}
